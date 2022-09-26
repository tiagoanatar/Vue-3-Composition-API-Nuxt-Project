<script setup lang="ts">
type TransactionItems = {
  name: string;
  value: string;
};

interface Props {
  dataTestId: string;
  routeItems: {
    label: string;
    url: string;
  };
  sectionTitle?: string;
  transactionItems: TransactionItems[];
}

withDefaults(defineProps<Props>(), {
  sectionTitle: 'Default title',
});

const callbackHandler = (data) => {
  console.log('callback data', data);
};
</script>

<template>
  <div
    class="theme-transaction-dropdown container"
    :data-test-id="`${dataTestId}-transaction`"
  >
    <div class="row">
      <div class="col-9 pb-2">
        <p>{{ sectionTitle }}</p>
      </div>
      <div class="col-3 pb-2 d-flex justify-content-end">
        <NuxtLink :to="routeItems?.url">
          {{ routeItems?.label }}
        </NuxtLink>
      </div>
      <div class="col p-0">
        <BaseDropdown
          id="transaction-btn-dropdown"
          data-test-id="transaction-dropdown"
          placeholder="All Transactions"
          :items="transactionItems"
          class="Info-secondary"
          @click="callbackHandler"
        />
      </div>
    </div>
  </div>
</template>
