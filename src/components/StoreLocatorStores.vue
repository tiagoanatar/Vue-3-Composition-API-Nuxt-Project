<script setup lang="ts">
import { IStoreList } from '@/utils/stores';

interface Props {
  storeList: Array<IStoreList>;
  cityName?: string;
  isLoading?: boolean;
}

withDefaults(defineProps<Props>(), {
  storeList: () => [],
  cityName: '',
  isLoading: false,
});
</script>

<template>
  <section class="theme-stores-list">
    <StoreLocatorStore
      v-for="(store, index) in !isLoading ? storeList : [1, 2, 3]"
      :key="index"
      :is-loading="isLoading"
      v-bind="!isLoading ? store : {}"
    />
  </section>
  <!-- TODO: This copy could come from contentful -->
  <p v-if="!isLoading && cityName" class="theme-stores-list-no-available">
    Sorry, no loans are available in {{ cityName }}. We’ll update you when a
    store is available.
  </p>
</template>
