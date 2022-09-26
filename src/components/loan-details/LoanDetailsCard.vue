<script setup lang="ts">
type TLoanDetailsItem = {
  label: string;
  value: string;
};

interface Props {
  dueAmount: string;
  dueAmountLabel: string;
  dueDate: string;
  dueDateLabel: string;
  loanDetailsItems: TLoanDetailsItem[];
  loanTitle: string;
  loanType: string;
  dataTestId: string;
}

const props = defineProps<Props>();

//TODO : Format the price value and due_amount once we have clear understanding on the API response format
</script>

<template>
  <section
    class="theme-loan-details-card"
    :data-testid="`${dataTestId}-card-container`"
  >
    <header class="theme-loan-details-card-header">
      <h2
        class="theme-loan-details-card-header-title"
        :data-testid="`${dataTestId}-card-header-title`"
      >
        {{ loanTitle }}
      </h2>

      <p
        class="theme-loan-details-card-header-loan-type"
        :data-testid="`${dataTestId}-card-header-loan-type`"
      >
        {{ loanType }}
      </p>
      <div
        class="container theme-loan-details-card-header-items"
        :data-testid="`${dataTestId}-card-header-items`"
      >
        <div class="row">
          <div class="col" :data-testid="`${dataTestId}-card-header-item-1`">
            <BaseKeyValueText
              :label="dueAmountLabel"
              :value="dueAmount"
              direction="column"
              :data-test-id="`${dataTestId}-card-header-item-1`"
            />
          </div>
          <div class="col" :data-testid="`${dataTestId}-card-header-item-2`">
            <BaseKeyValueText
              :label="dueDateLabel"
              :value="dueDate"
              :data-test-id="`${dataTestId}-card-header-item-2`"
            />
          </div>
        </div>
      </div>
    </header>
    <div class="theme-loan-details-card-hr" />
    <div
      class="container theme-loan-details-card-items"
      :data-testid="`${dataTestId}-card-items`"
    >
      <div
        v-for="(item, index) in props?.loanDetailsItems"
        :key="item.value"
        class="row"
        :data-testid="`${dataTestId}-card-item-${index}`"
      >
        <BaseKeyValueText
          :label="item.label"
          :value="item.value"
          text-direction="row"
          :data-test-id="`${dataTestId}-card-item-${index}`"
        />
      </div>
    </div>
  </section>
</template>
