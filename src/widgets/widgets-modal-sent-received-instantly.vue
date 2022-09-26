<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-loan-tracker-card-money-sent-and-received'
);
const testId = 'money-sent-and-received-instantly';
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="moneySentReceivedInstantly"
      background="blue-image"
      :data-test-id="testId"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal.headline }}</h1>
          <p>{{ data?.modal.subheadline }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          variation="secondary"
          data-bs-dismiss="modal"
          :data-test-id="testId"
          :label="data?.modal.ctaLabel"
        />
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
