<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-loan-origination-summary'
);
const copyPlaceHolder: TPlaceHolder[] = [{ col: 6 }, { col: 6 }, { col: 5 }];
</script>

<template>
  <LoanApplicationBodyCopy>
    <div class="row d-flex align-items-center theme-loan-origination-header-description"
    >
      <div class="col">
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
      <div class="col-3">
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 12, size: 'lg' }]"
        >
          <img :src="data?.icon" alt="Advance America Logo" />
        </BaseSkeletonLoader>
      </div>
    </div>
  </LoanApplicationBodyCopy>
</template>
