<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { TPlaceHolder } from '@/constants/bootstrap';

const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-bank-verification-screen');

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];
</script>

<template>
  <div class="theme-info-verification-cta d-flex flex-column">
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <NuxtLink
        :to="Routes.AddressReApplyVerification"
        data-test-id="verify-bank-yes"
        class="theme-btn btn btn-lg btn-primary"
      >
        <span>{{ data?.ctaList[0]?.label }}</span>
      </NuxtLink>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <NuxtLink
        :to="Routes.ReApplyUpdateBankInformation"
        data-test-id="verify-bank-no"
        class="theme-btn btn btn-lg btn-secondary"
      >
        <span>{{ data?.ctaList[1]?.label }}</span>
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
