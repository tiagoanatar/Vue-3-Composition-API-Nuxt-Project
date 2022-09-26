<script setup lang="ts">
import { Masks } from '@/constants/masks';
import { useZipcodeSchema } from '@/composables/schemas/useSchemas';

const testId = 'zip-code';
const emit = defineEmits(['handleAction']);
const schema = useZipcodeSchema();
const isLoading = reactive({ value: false });
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-zipcode');
const purposeEndpoint = 'v1/zipcode-composite-ms';

const handleSubmit = async (data) => {
  const { get } = await useAxios({ useAuth: false });

  isLoading.value = true;

  get(`${purposeEndpoint}/service/coverage/${data?.zipCode}`, {
    context: 'zipcode',
  }).then((response: any) => {
    if (response) {
      const channel = response?.channel ?? '';

      emit('handleAction', { channel, zipCode: data?.zipCode });

      if (!['both', 'online'].includes(channel)) {
        isLoading.value = false;
      }
    } else {
      emit('handleAction', {});
      isLoading.value = false;
    }
  });
};
</script>

<template>
  <BaseForm
    v-if="data?.cta"
    :button-label="data.cta"
    :data-test-id="testId"
    :schema="schema"
    :is-loading="isLoading.value"
    :submit="handleSubmit"
    class="theme-form-zip-code"
    submit-alignment="center"
  >
    <BaseInput
      id="zipCode"
      max-length="5"
      name="zipCode"
      type="text"
      :mask="Masks.ZipCode"
      :is-disabled="isLoading.value"
      :data-test-id="testId"
      :is-loading="pending"
      :label="data.zipCodeInput"
    />
  </BaseForm>
</template>
