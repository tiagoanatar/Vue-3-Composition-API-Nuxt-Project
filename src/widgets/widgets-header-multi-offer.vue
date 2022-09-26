<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';
const { getHeaderMultiOfferData } = useContentful();
const { data, pending } = getHeaderMultiOfferData(
  'widget-dark-blue-header-loan-origination'
);

const dummyData = {
  approvedAmount: 1000,
};

const approvedAmount = ref(dummyData.approvedAmount);
let incrementValue = ref(dummyData.approvedAmount);
let isDecrease = ref(false);
let isIncrease = ref(false);

onMounted(() => {
  isIncrease.value = true;
});

const increment = (value) => {
  isIncrease.value =
    incrementValue.value === approvedAmount.value || incrementValue.value <= 20;
  isDecrease.value = incrementValue.value <= 20;
  if (incrementValue.value < approvedAmount.value && value === 'increase') {
    incrementValue.value = incrementValue.value + 10;
  } else if (incrementValue.value >= 10 && value === 'decrease') {
    incrementValue.value = incrementValue.value - 10;
  } else if (incrementValue.value <= 20) {
    return;
  }
};

/**
 * TODO: Replace increment function with useCounter composable .
 * @see widget-header-refinance-multi-offer
 */
</script>

<template>
  <BaseCard is-base-card data-test-id="multi-offer-header">
    <WidgetsHeaderBlockDark />
    <BaseSkeletonLoader :is-loading="pending">
      <h1>
        {{ data?.heading }} <span>{{ data?.headingFinal }}</span>
        <!-- TODO: Get data from contentful broken up so that span can be used. -->
        <!-- <span> loan up to ${{ approvedAmount }}</span> -->
      </h1>
    </BaseSkeletonLoader>
    <div class="theme-amount-increment">
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
        <p>{{ data?.label }}</p>
      </BaseSkeletonLoader>

      <div class="theme-amount-increment-widget">
        <button
          class="btn-increment"
          data-test-id="test"
          @click="increment('decrease')"
        >
          <BaseIcon
            v-if="isDecrease"
            :name="IconNames.MinusCircle"
            :color="Colors.AADisabled"
          />
          <BaseIcon
            v-else
            :name="IconNames.MinusCircle"
            :color="Colors.White"
          />
        </button>

        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <div class="theme-amount-increment-value">
            <p class="theme-amount-increment-value-position">
              ${{ incrementValue }}
            </p>
          </div>
        </BaseSkeletonLoader>
        <button
          class="btn-increment"
          data-test-id="test"
          @click="increment('increase')"
        >
          <BaseIcon
            v-if="isIncrease"
            :name="IconNames.PlusCircle"
            :color="Colors.AADisabled"
          />
          <BaseIcon v-else :name="IconNames.PlusCircle" :color="Colors.White" />
        </button>
      </div>
    </div>
  </BaseCard>
</template>
