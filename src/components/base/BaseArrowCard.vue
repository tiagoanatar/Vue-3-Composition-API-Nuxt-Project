<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

interface Props {
  isRecommended?: boolean;
  dataTestId: string;
  url?: string;
}

withDefaults(defineProps<Props>(), {
  isRecommended: false,
  url: '',
});
</script>

<template>
  <div :class="['theme-arrow-card card', { 'is-recommended': isRecommended }]">
    <div
      v-if="isRecommended"
      class="card-header"
      :data-testid="`${dataTestId}-card-header`"
    >
      <p><slot name="header">Default header</slot></p>
    </div>
    <div class="card-body" :data-testid="`${dataTestId}-card-body`">
      <div class="row d-flex align-items-center">
        <div class="col-10">
          <div class="card-title">
            <p class="font-weight-bolder">
              <slot name="title">Default title</slot>
            </p>
          </div>

          <div class="card-text" :data-testid="`${dataTestId}-card-content`">
            <p><slot name="text">Default body text</slot></p>
            <slot name="default"></slot>
          </div>
        </div>
        <div class="col-2">
          <div class="d-flex justify-content-end">
            <NuxtLink :to="url" :data-testid="`${dataTestId}-card-link`">
              <BaseIcon
                v-if="isRecommended"
                :name="IconNames.ArrowRight"
                :color="Colors.White"
              />
              <BaseIcon v-else :name="IconNames.ArrowRight" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
