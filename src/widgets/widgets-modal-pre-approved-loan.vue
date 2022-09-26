<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData('widget-modal-pre-approved-loan');
const testId = 'pre-approved-loan-modal';
const emit = defineEmits(['handleHide']);
</script>

<template>
  <ClientOnly>
    <BaseModal
      v-if="data?.modal?.headline"
      id="pre-approved-loan"
      background="blue-image"
      :data-test-id="testId"
      :show-me="true"
      @handle-hide="emit('handleHide')"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal?.headline }}</h1>
          <p>{{ data?.modal?.subheadline }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          variation="secondary"
          :data-test-id="testId"
          :label="data?.modal?.ctaLabel"
          @click="emit('handleHide')"
        />
      </template>
      <template #footer>
        <img
          v-if="data?.modal?.image"
          :alt="data?.modal?.imageAlt"
          :src="data?.modal?.image"
        />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
