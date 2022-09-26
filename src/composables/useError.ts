import { Routes } from '@/constants/pages';
import { useState } from '#app';

type ErrorCodes =
  | 'InvalidInputData'
  | 'UnknownError'
  | 'SsnAnotherOnlineAccountExists';

interface Error {
  data?: {
    errors: {
      code: ErrorCodes;
      title: string;
      detail: string;
    }[];
  };
  status: number;
}

export type Context =
  | 'applicant'
  | 'composite'
  | 'contentful'
  | 'gmaps'
  | 'okta'
  | 'zipcode'
  | 'application-data'
  | 'financial'
  | 'upload-file';

export const useErrorModal = () => {
  // NOTE: Modals.
  const isGeneralErrorModalVisible = useState(
    'isGeneralErrorModalVisible',
    () => false
  );

  const existingOnlineSsnModal = useState('existingOnlineSsnModal', () => ({
    isVisible: false,
    email: null,
  }));

  // NOTE: Modal handlers.
  const isContactSupportErrorModalVisible = useState(
    'isContactSupportErrorModalVisible',
    () => false
  );

  const showContactSupportErrorModal = (value: boolean): void => {
    isGeneralErrorModalVisible.value = value;
  };

  const showGeneralErrorModal = (value: boolean): void => {
    isGeneralErrorModalVisible.value = value;
  };

  const updateExistingOnlineSsnModal = (stateData): void => {
    existingOnlineSsnModal.value = stateData;
  };

  return {
    existingOnlineSsnModal: computed(() => existingOnlineSsnModal.value),
    isContactSupportErrorModalVisible: computed(
      () => isContactSupportErrorModalVisible.value
    ),
    isGeneralErrorModalVisible: computed(
      () => isGeneralErrorModalVisible.value
    ),
    showContactSupportErrorModal,
    showGeneralErrorModal,
    updateExistingOnlineSsnModal,
  };
};

export const useError = () => {
  const notification = useNotification();
  const router = useRouter();

  const handleApplicantError = () => {
    // TODO: Update the message with contentful.
    notification.updateMessage('Account created, please login to start.');

    // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
    location.href = Routes.Login;
  };

  const handleCompositeError = async (error: Error) => {
    const errorObj = error?.data?.errors[0];

    if (errorObj?.code === 'UnknownError') {
      // TODO: Update the message with contentful.
      return notification.updateMessage(
        'Something went wrong, please try again.'
      );
    }

    return notification.updateMessage(errorObj?.detail);
  };

  const handleGeneralError = (_error?: Error, context?: Context) => {
    const { showGeneralErrorModal, showContactSupportErrorModal } =
      useErrorModal();

    /**
     * NOTE: Whenever applicant service get's 500,
     * the user needs to contact support to manually get it's purpose ID in the jwt.
     */
    if (context === 'applicant') {
      const { logIn } = useSession();

      logIn();
      showContactSupportErrorModal(true);

      return router.push(Routes.Dashboard);
    }

    showGeneralErrorModal(true);

    return router.push(Routes.Dashboard);
  };

  const handleContentfulError = () => {
    handleGeneralError();
  };

  const handleGmapsError = () => {
    handleGeneralError();
  };

  const handleOktaError = () => {
    // TODO: Update the message with contentful.
    notification.updateMessage('Something went wrong, please try again.');

    // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
    location.href = Routes.Login;
  };

  const handleUnauthorizedError = async () => {
    const { logOut } = useSession();

    // TODO: Update the message with contentful.
    notification.updateMessage('Session expired, please login again.');

    await logOut();

    // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
    location.href = Routes.Login;
  };

  const handleConflictError = (error: Error) => {
    const { updateExistingOnlineSsnModal } = useErrorModal();

    const errorObj = error?.data;

    if (errorObj?.errors[0]?.code === 'SsnAnotherOnlineAccountExists') {
      return updateExistingOnlineSsnModal({
        isVisible: true,
        email: errorObj?.data?.email,
      });
    }
  };

  const contextTypes = {
    applicant: handleApplicantError,
    composite: handleCompositeError,
    contentful: handleContentfulError,
    gmaps: handleGmapsError,
    okta: handleOktaError,
  };

  const errorStatus = {
    '400': () => {
      return;
    }, // TODO: add 400 validations once 500 services fix are finished.
    '401': handleUnauthorizedError,
    '403': handleGeneralError,
    '409': handleConflictError,
    '500': handleGeneralError,
  };

  const handleError = (error: Error, context: Context = 'composite') => {
    try {
      if (context === 'financial') {
        // TODO: Remove this validation since financial service returns 500 if there is no banks for the purpose id.
        return;
      }

      if (context === 'application-data') {
        // TODO: Remove this validation since application service returns 500 if the user haven't save anything so far.
        if (error.status === 401) {
          return handleUnauthorizedError();
        }

        return;
      }

      if (context === 'zipcode') {
        // TODO: Remove this validation since zipcode service returns 500 if the zipcode is invalid.
        return;
      }

      if (context === 'upload-file') {
        // NOTE: The action of canceling the upload of a file generates an error,
        // so this validation is necessary to be captured by the UI
        return error;
      }

      // NOTE: First validate if this is a general error that can be handled by it's status.
      if (error?.status) {
        return errorStatus[error.status](error, context);
      }

      // If the error status is not listed above it will be handled by it's context.
      contextTypes[context](error);
    } catch (error) {
      handleGeneralError(error, context);
    }
  };

  return {
    handleError,
  };
};
