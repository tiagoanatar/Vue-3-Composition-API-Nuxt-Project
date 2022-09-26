<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

interface Props {
  bodyCopy?: string;
  bodyTitle?: string;
  copy?: string;
  hasTimer?: boolean;
  moreCtaLabel?: string;
  moreUrl?: string;
  title: string;
  subTitle: string;
  variation?: 'default' | 'with-body';
  time?: string;
  redirectionUrl?: string;
  dataTestId: string;
}

withDefaults(defineProps<Props>(), {
  variation: 'default',
  hasTimer: false,
});

const emit = defineEmits(['apply-now']);

const handleApplyNow = () => {
  emit('apply-now');
};
</script>
<template>
  <BaseCard
    :class="['theme-new-loan-card', `theme-${variation}`]"
    data-test-id="new-loan-card"
    is-base-card
  >
    <div class="theme-new-loan-card-banner">
      <div class="theme-new-loan-card-logo">
        <img
          alt="logo"
          src="@/assets/images/logo-mark-dark.svg"
          :data-testid="`${dataTestId}-logo`"
        />
      </div>

      <h2 class="card-title" :data-testid="`${dataTestId}-title`">
        <div>{{ title }}</div>
        <div v-if="subTitle">{{ subTitle }}</div>
      </h2>

      <p
        v-if="variation === 'default'"
        class="card-text"
        :data-testid="`${dataTestId}-copy`"
      >
        {{ copy }}
      </p>

      <div v-if="variation === 'default'" class="btn-wrapper">
        <BaseButton
          variation="secondary"
          label="Apply Now"
          :data-test-id="`${dataTestId}-apply-now-cta`"
          @click="handleApplyNow"
        />
      </div>
    </div>

    <div v-if="variation !== 'default'" class="theme-new-loan-card-details">
      <a
        v-if="!hasTimer"
        :href="redirectionUrl"
        aria-label="icon"
        class="theme-new-loan-card-icon-wrapper"
        :data-testid="`${dataTestId}-link`"
      >
        <BaseIcon :name="IconNames.ArrowRight" :color="Colors.White" />
      </a>
      <p
        class="theme-new-loan-card-details-title"
        :data-testid="`${dataTestId}-body-title`"
      >
        {{ bodyTitle }}
      </p>
      <p
        class="theme-new-loan-card-details-text"
        :data-testid="`${dataTestId}-body-copy`"
      >
        {{ bodyCopy }}
      </p>
      <NuxtLink
        class="learn-more"
        :to="moreUrl"
        :data-testid="`${dataTestId}-link`"
        >{{ moreCtaLabel }}</NuxtLink
      >
      <LoanTimer
        v-if="hasTimer"
        :time="time"
        :url="redirectionUrl"
        :data-test-id="`${dataTestId}-timer`"
      />
    </div>
  </BaseCard>
</template>
