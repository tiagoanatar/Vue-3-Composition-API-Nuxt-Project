<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { useExitStatusSchema } from '@/composables/schemas/useSchemas';
const { getApplication, setApplication } = useExitAplication();

const id = 'exitStatus';
const router = useRouter();
const notification = useNotification();
const schema = useExitStatusSchema();
const { getFormData } = useContentful();
const { putApplication } = useComposite();
const { data, pending } = getFormData('widget-form-application-exit');
const isLoading = ref(false);
const isPending = ref(true);

const exitStatus = reactive({
  value: '',
});

function clickExitStatus(value: string) {
  exitStatus.value = value;
}

const saveApplication = async (exitStatus = '') => {
  const {
    applicationId = '',
    page = '',
    data = {},
    query = '',
  } = getApplication.value;

  // TODO: Add error handler
  await putApplication(applicationId, {
    exitReason: exitStatus,
    lastApplicationPage: JSON.stringify({
      page,
      query,
      data,
    }),
  });
};

async function handleSubmit({ exitStatus = '' }) {
  const session = useSession();
  isLoading.value = true;

  await saveApplication(exitStatus);

  // Remove the applicationId from the state.
  setApplication();
  notification.updateMessage('Logged out');
  await session.logOut();

  // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
  location.href = Routes.Login;
}

onMounted(async () => {
  await saveApplication();
  isPending.value = false;
});

const isFormLoading = computed(
  () => isLoading.value || pending.value || isPending.value
);
const isInputLoading = computed(() => pending.value || isPending.value);
</script>

<template>
  <BaseForm
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    :is-loading="isFormLoading"
    submit-alignment="center"
    variation="secondary"
  >
    <BaseRadioButton
      id="exit-0"
      :checked-value="exitStatus.value"
      :data-test-id="`${id}-exit-0`"
      :is-disabled="isLoading"
      :is-loading="isInputLoading"
      :is-validate-disabled="false"
      :label="data?.exitStatus[0]"
      :value="data?.exitStatus[0]"
      name="exitStatus"
      @click="clickExitStatus"
    />
    <BaseRadioButton
      id="exit-1"
      :checked-value="exitStatus.value"
      :data-test-id="`${id}-exit-1`"
      :is-disabled="isLoading"
      :is-loading="isInputLoading"
      :is-validate-disabled="false"
      :label="data?.exitStatus[1]"
      :value="data?.exitStatus[1]"
      name="exitStatus"
      @click="clickExitStatus"
    />
    <BaseRadioButton
      id="exit-2"
      :checked-value="exitStatus.value"
      :data-test-id="`${id}-exit-2`"
      :is-disabled="isLoading"
      :is-loading="isInputLoading"
      :is-validate-disabled="false"
      :label="data?.exitStatus[2]"
      :value="data?.exitStatus[2]"
      name="exitStatus"
      @click="clickExitStatus"
    />
    <BaseRadioButton
      id="exit-3"
      :checked-value="exitStatus.value"
      :data-test-id="`${id}-exit-3`"
      :is-disabled="isLoading"
      :is-loading="isInputLoading"
      :is-validate-disabled="false"
      :label="data?.exitStatus[3]"
      :value="data?.exitStatus[3]"
      name="exitStatus"
      @click="clickExitStatus"
    />
    <BaseRadioButton
      id="exit-4"
      :checked-value="exitStatus.value"
      :is-disabled="isLoading"
      :data-test-id="`${id}-exit-4`"
      :is-loading="isInputLoading"
      :label="data?.exitStatus[4]"
      :value="data?.exitStatus[4]"
      name="exitStatus"
      @click="clickExitStatus"
    />
  </BaseForm>
</template>
