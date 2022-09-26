<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData('widget-modal-loan-tracker-pick-up-in-store');
const testId = 'pick-up-in-store';
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="modalPickUpInStore"
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
