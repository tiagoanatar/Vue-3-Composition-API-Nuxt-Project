<script setup lang="ts">
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

interface Card {
  cardType: string;
  copy: string;
  dataTestId: string;
  logo: string;
  logoAlt: string;
  title: string;
}

interface Props {
  data: Card[];
  dataTestId: string;
  sectionTitle: string;
  isLoading: boolean;
}

defineProps<Props>();
const moneyCardSliderOptions = {
  wheel: true,
  preloadPages: 3,
};
</script>

<template>
  <BaseCard
    is-base-card
    class="theme-money-card-slider theme-splide-slider"
    :data-test-id="dataTestId"
  >
    <div class="theme-money-card-slider-container">
      <div class="theme-money-card-slider-container-header">
        <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
          <p>
            {{ sectionTitle }}
          </p>
        </BaseSkeletonLoader>
      </div>
      <div class="splide__arrows" />
      <!-- TODO: Add loader to not jerk the UI for Splide third party package -->
      <Splide :options="moneyCardSliderOptions">
        <SplideSlide
          v-for="(item, index) in isLoading ? [1, 2] : data"
          :key="`money-card-${index}`"
        >
          <div class="theme-money-card-slider-wrapper">
            <MoneyCard v-bind="item" :is-loading="isLoading" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </BaseCard>
</template>
