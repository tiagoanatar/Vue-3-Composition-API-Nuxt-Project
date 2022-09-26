<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/pages';

export interface PaymentMethodCardProps {
  paymentCardTitle: string;
  paymentMethodType: string;
  paymentCardId?: number | string;
  dataTestId: string;
  isExpiredCard?: boolean;
  editDetailsUri?: string;
  redirectLinkText?: string;
  isSecuringLoan?: boolean;
  expiredLabel?: string;
  securingLoanLabel?: string;
  activeLabel?: string;
}

const props = withDefaults(defineProps<PaymentMethodCardProps>(), {
  paymentCardId: 0,
  isExpiredCard: false,
  editDetailsUri: Routes.Landing,
  redirectLinkText: 'Edit',
  isSecuringLoan: false,
  expiredLabel: '',
  securingLoanLabel: '',
  activeLabel: '',
});

const cxCardStateClassList = computed(() => [
  'theme-payment-method-card-description-status',
  props.isExpiredCard ? 'error-text' : 'active-text',
]);

// TODO: Need to revisit the text to be displayed once the actual service is integrated
const statusText = computed(() =>
  props.isSecuringLoan ? props.securingLoanLabel : props.activeLabel
);

const iconColor = computed(() =>
  props.isSecuringLoan ? Colors.AAGrey : Colors.AARed
);

const cxDeleteIconClassList = computed(() => [
  'theme-payment-method-card-delete-icon',
  props.isSecuringLoan ? 'theme-payment-method-card-delete-icon-disable' : '',
]);

const emit = defineEmits(['click']);

const handleClick = () => {
  if (props.isSecuringLoan) return;
  emit('click');
};
</script>

<template>
  <div
    class="theme-payment-method-card row justify-content-between"
    :data-testId="`${dataTestId}-payment-method-card`"
  >
    <div class="theme-payment-method-card-description col-8">
      <p class="theme-payment-method-card-description-title">
        {{ paymentCardTitle }}
      </p>
      <p class="theme-payment-method-card-description-type">
        {{ paymentMethodType }}
      </p>
      <p :class="cxCardStateClassList">
        <span v-if="isExpiredCard">{{ expiredLabel }}</span>
        <span v-else>{{ statusText }}</span>
      </p>
    </div>
    <div class="theme-payment-method-card-action col-4 d-flex justify-content-end"
    >
      <NuxtLink
        v-if="isExpiredCard"
        :to="editDetailsUri"
        class="theme-payment-method-card-action-link"
      >
        {{ redirectLinkText }}
      </NuxtLink>
      <!-- TODO: Check the field from service which gives info about whether the card is used for securing loan-->
      <BaseIcon
        v-else
        :class="cxDeleteIconClassList"
        :name="IconNames.Delete"
        :color="iconColor"
        :size="IconSizes.Small"
        @click="handleClick"
      />
    </div>
  </div>
</template>
