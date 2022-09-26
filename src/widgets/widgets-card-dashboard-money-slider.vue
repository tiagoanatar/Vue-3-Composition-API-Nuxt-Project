<script setup lang="ts">
const { getMoneyCardSliderData } = useContentful();
const { data, pending } = getMoneyCardSliderData(
  'widget-dashboard-money-card-slider'
);
</script>

<template>
  <MoneyCardSlider
    :data="data?.cards ?? []"
    :is-loading="pending"
    :section-title="data?.sectionTitle || ''"
    data-test-id="money-card-slider"
  />
</template>
