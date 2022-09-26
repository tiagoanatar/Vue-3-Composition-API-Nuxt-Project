<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-financial-success'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 6 }, { col: 6 }, { col: 5 }];

// TODO: Integrate image alt to contentful
</script>
<template>
  <LoanApplicationBodyCopy>
    <div class="theme-loan-origination-success-description">
      <div class="theme-loan-origination-success-description-content">
        <div class="theme-loan-origination-success-description-content-image-desktop"
        >
          <BaseSkeletonLoader
            :is-loading="pending"
            :rows="[{ col: 12, size: 'lg' }]"
          >
            <img :src="data?.iconDesktop01" alt="Advance America Logo" />
          </BaseSkeletonLoader>
        </div>
        <div class="theme-loan-origination-success-description-content-main">
          <BaseSkeletonLoader
            :is-loading="pending"
            :rows="[{ col: 12, size: 'lg' }]"
          >
            <h1>{{ data?.title }}</h1>
          </BaseSkeletonLoader>
          <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
            <p>{{ data?.copy }}</p>
          </BaseSkeletonLoader>
        </div>
        <div class="theme-loan-origination-success-description-content-image-mobile"
        >
          <BaseSkeletonLoader
            :is-loading="pending"
            :rows="[{ col: 12, size: 'lg' }]"
          >
            <img :src="data?.icon" alt="Advance America Logo" />
          </BaseSkeletonLoader>
        </div>
        <div class="theme-loan-origination-success-description-content-image-desktop"
        >
          <BaseSkeletonLoader
            :is-loading="pending"
            :rows="[{ col: 12, size: 'lg' }]"
          >
            <img :src="data?.iconDesktop02" alt="Advance America Logo" />
          </BaseSkeletonLoader>
        </div>
      </div>
    </div>
  </LoanApplicationBodyCopy>
</template>
