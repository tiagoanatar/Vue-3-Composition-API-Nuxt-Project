<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-disclosure-electronic-communications'
);
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="disclosure-electronic-communication"
      background="blue"
      data-test-id="pi-modal-terms"
      position="bottom"
    >
      <template #default>
        <LoanApplicationBodyCopy>
          <h2>{{ data?.modal.headline }}</h2>
          <p v-for="(copy, key) in data?.modal.copy" :key="key">{{ copy }}</p>
        </LoanApplicationBodyCopy>
      </template>
    </BaseModal>
  </ClientOnly>
</template>
