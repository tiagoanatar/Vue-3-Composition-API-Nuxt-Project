<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';

const { isMobile } = useIsMobileDevice();

interface LoanItem {
  title: string;
  value: string;
}

interface Props {
  amount: string;
  badgeType: 'active' | 'processing';
  balance: string;
  balanceLabel: string;
  dataTestId: string;
  loanId: number;
  loanItems: LoanItem[];
  loanLabel: string;
  loanTitle: string;
  isNakedCard?: boolean;
  type: 'installment' | 'line-of-credit' | 'payday';
  status?: string;
}
const props = withDefaults(defineProps<Props>(), {
  isNakedCard: false,
  status: '',
});

const cxLoanCardClasses = computed(() => [
  'theme-loan-card',
  {
    'theme-loan-card-naked': Boolean(props.isNakedCard),
  },
]);

const cxContentClass = computed(() => [
  'theme-loan-card-details-content',
  isMobile.value ? 'd-flex justify-content-between' : 'row',
]);
</script>

<template>
  <BaseCard :class="cxLoanCardClasses" :data-test-id="`${dataTestId}-card`">
    <template #header>
      <div class="theme-loan-card-header theme-loan-card-with-border-bottom d-flex justify-content-between"
      >
        <div class="d-flex align-items-center">
          <div class="theme-loan-card-header-logo">
            <!--TODO: Get the loan card logo from CMS-->
            <img
              src="~@/assets/images/logo-mark-dark.svg"
              :alt="`${type}-card-logo`"
              class="theme-loan-card-header-logo-icon"
            />
          </div>
          <div class="theme-loan-card-header-title">
            <p class="theme-loan-card-header-title-text">{{ loanTitle }}</p>
            <p class="theme-loan-card-header-title-content">
              {{ loanLabel }} {{ loanId }}
            </p>
          </div>
        </div>
        <div class="theme-loan-card-header-amount d-flex">
          <p>{{ amount }}</p>
          <!-- TODO: Handle click events on BaseIcon -->
          <BaseIcon :name="IconNames.Info" :size="IconSizes.Medium" />
        </div>
      </div>
    </template>
    <template #title>
      <div class="theme-loan-card-details-header">
        <BaseKeyValueText
          :data-test-id="`${dataTestId}-card-balance`"
          text-direction="column"
          :label="balanceLabel"
          :value="balance"
          :is-loading="false"
        />
      </div>
    </template>
    <template #text>
      <div :class="cxContentClass">
        <div
          v-for="(item, index) in loanItems"
          :key="`${item.title}-${index}`"
          class="col-md-3"
        >
          <BaseKeyValueText
            :label="item?.title"
            :value="item?.title !== 'Status' ? item?.value || '--' : ''"
            :data-test-id="`${dataTestId}-${item.title}`"
            :is-loading="false"
          >
            <template v-if="item?.title === 'Status'" #value>
              <BaseBadge
                :label="item?.value"
                :badge-type="badgeType"
                :status="status"
              />
            </template>
          </BaseKeyValueText>
        </div>
      </div>
    </template>
    <template v-if="!isNakedCard" #footer>
      <slot name="footerContent" />
    </template>
  </BaseCard>
</template>
