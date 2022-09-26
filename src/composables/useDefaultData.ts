import { Routes } from '@/constants/pages';

// Save and exit data || service saved data.
export default () => {
  const { getApplicationData, putApplication } = useComposite();
  const applicationData = { applicationId: '', page: '' };
  const router = useRouter();
  const currentRoute = router.currentRoute.value.path;
  let saveAndExitData = {};

  const getDefaultData = async (savedDataService?: () => void) => {
    const userData = savedDataService ? await savedDataService() : {};

    const { applicationId = '', lastApplicationPage } =
      await getApplicationData();

    const page = Routes[lastApplicationPage?.page] || '';

    // It validates if save and exit information was saved for this page.
    if (applicationId && page === currentRoute) {
      saveAndExitData = lastApplicationPage?.data || {};

      applicationData.applicationId = applicationId;
      applicationData.page = page;
    }

    return {
      userData,
      saveAndExitData,
    };
  };

  const removeSaveAndExitData = async () => {
    if (
      applicationData.applicationId &&
      applicationData.page === currentRoute
    ) {
      await putApplication(applicationData.applicationId, {
        exitReason: '',
        lastApplicationPage: '',
      });
    }
  };

  return {
    getDefaultData,
    removeSaveAndExitData,
  };
};
