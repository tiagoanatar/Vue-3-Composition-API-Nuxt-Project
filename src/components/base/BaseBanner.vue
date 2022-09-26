<script setup lang="ts">
import { BannerVariations, iconsVariations } from '@/constants/icon-variations';
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';

type Link = { label: string; url: string };

interface Props {
  dataTestId: string;
  description: string;
  heading: string;
  isWithCard?: boolean;
  link?: Link;
  variation?: BannerVariations;
}

const { icon: isIconSlotPresent } = useSlots();

const props = withDefaults(defineProps<Props>(), {
  variation: 'success',
  iconColor: Colors.Black,
  iconName: IconNames.AlertCircle,
  isWithCard: false,
  link: () => ({
    label: '',
    url: '',
  }),
});

const themeBannerClass = computed(() => [
  'theme-banner justify-content-between',
  {
    ['theme-banner-with-card']: props.isWithCard, // Will keep border radius at bottom only, for mobile and desktop while using with card.
  },
  `theme-banner-${props.variation}`, // For different variations
]);

// If isIconSlotPresent = true, then iconCenterClass will keep icons center for a mobile view.
const iconCenterClass = computed(() => [
  {
    [`d-flex align-items-center align-items-md-start`]: isIconSlotPresent,
  },
]);
</script>

<template>
  <div
    :class="themeBannerClass"
    role="banner"
    :data-test-id="`${dataTestId}-banner`"
  >
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <BaseIcon
          :class="iconCenterClass"
          :name="iconsVariations[variation].name"
          :color="iconsVariations[variation].color"
          :size="IconSizes.Large"
        />
        <div class="theme-banner-content">
          <p class="theme-banner-content-heading">{{ heading }}</p>
          <p class="theme-banner-content-description">
            {{ description }}
            <NuxtLink
              v-if="link?.url && link?.label"
              :href="link?.url || ''"
              :data-test-id="`${dataTestId}-banner-link`"
            >
              {{ link.label }}</NuxtLink
            >
          </p>
        </div>
      </div>
      <div
        v-if="isIconSlotPresent"
        :class="iconCenterClass"
        class="theme-banner-action-container d-md-none"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>
