<script setup lang="ts">
import { IconNames } from '@/constants/icons';
import { Routes } from '@/constants/pages';
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-visit-a-store');
</script>
<template>
  <div class="theme-contact-us-visit-a-store">
    <BaseSkeletonLoader :is-loading="pending">
      <NuxtLink
        data-test-id="contact-us-visit-a-store-link"
        :to="Routes.StoreLocator"
      >
        <BaseKeyValueText
          data-test-id="contact-us-visit-a-store"
          :is-loading="pending"
          :label="data?.ctaList?.[0]?.label"
          text-direction="row"
        >
          <template #value>
            <BaseIcon :name="IconNames.ArrowRight" />
          </template>
        </BaseKeyValueText>
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
