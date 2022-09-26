<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { useModalEmail } from '@/composables/schemas/useSchemas';

const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-personal-address-servicing-area'
);

interface Props {
  showModal: boolean;
  zipcode?: string;
}

const testId = 'no-service';
const schema = useModalEmail();
const isLoading = reactive({ value: false });

const props = withDefaults(defineProps<Props>(), {
  showModal: false,
  zipcode: '',
});

const emailInput = ref('');
const env = useEnvironmentVariables();
const purposeEndpoint =
  env.variables.value.PURPOSE_ENDPOINT + 'v1/lead-composite-ms';
const router = useRouter();

const handleHide = () => {
  isLoading.value = false;
  emailInput.value = '';
  router.push(Routes.Landing);
};

const handleEmail = async (data) => {
  const { post } = await useAxios();
  isLoading.value = true;
  emailInput.value = data?.email;

  post(`${purposeEndpoint}/lead`, {
    email: data?.email,
    zipcode: props?.zipcode,
  }).then((response) => {
    if (response) {
      handleHide();
    }
  });
};
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="modal-email"
      background="blue-image"
      :data-test-id="testId"
      :show-me="showModal"
      @handle-hide="handleHide"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal.headline }}</h1>
          <p>{{ data?.modal.subheadline }}</p>
        </LoanApplicationBodyCopy>
        <BaseForm
          variation="secondary"
          :button-label="data?.modal.ctaLabel"
          :data-test-id="testId"
          :schema="schema"
          :submit="handleEmail"
          :is-loading="isLoading.value"
        >
          <BaseInput
            id="email"
            :data-test-id="testId"
            :effect-value="emailInput"
            :is-disabled="isLoading.value"
            :label="data?.modal.input"
            name="email"
            type="email"
          />
        </BaseForm>
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
