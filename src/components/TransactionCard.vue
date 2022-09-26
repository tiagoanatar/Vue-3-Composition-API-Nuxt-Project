<script setup lang="ts">
import {
  TransactionCardTypes,
  transactionCardIconVariations,
} from '@/constants/transaction-card-variations';
import { IconNames } from '@/constants/icons';

type transactionItems = {
  label: string;
  value: string;
};

interface Props {
  amount: string;
  dataTestId: string;
  options: transactionItems[];
  routeToAllTransactions?: string;
  title: string;
  type: TransactionCardTypes;
}

const props = withDefaults(defineProps<Props>(), {
  routeToAllTransactions: '',
});

const cxIcon = computed(() => [
  'theme-transaction-card-icon',
  `theme-transaction-card-${props.type}`,
]);
const cxRoute = computed(() => [
  'theme-transaction-card-amount col d-flex p-0',
  {
    ['theme-transaction-card-route']: !props.routeToAllTransactions,
  },
]);
</script>

<template>
  <div
    class="theme-transaction-card row"
    :data-test-id="`${dataTestId}-transaction-card`"
  >
    <div class="theme-transaction-card-header col-3 d-flex">
      <div :class="cxIcon">
        <BaseIcon :name="transactionCardIconVariations[type]?.name" />
      </div>
    </div>
    <div class="col-6 p-0">
      <p class="theme-transaction-card-description">{{ title }}</p>
      <p
        v-for="opt in options"
        :key="opt.label"
        class="theme-transaction-card-content"
      >
        <!-- TODO: To format the currency -->
        {{ opt?.label === 'Date' ? '' : opt.label }} {{ opt.value }}
      </p>
    </div>
    <div :class="cxRoute">
      <p>{{ amount }}</p>
      <NuxtLink v-if="routeToAllTransactions" :to="routeToAllTransactions">
        <BaseIcon :name="IconNames.ChevronRight" />
      </NuxtLink>
    </div>
  </div>
</template>
