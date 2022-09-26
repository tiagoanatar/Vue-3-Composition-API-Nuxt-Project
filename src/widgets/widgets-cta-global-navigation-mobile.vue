<script setup lang="ts">
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-global-navigation-mobile');
const dataTestId = 'global-navigation-mobile-cta';
</script>

<template>
  <ul role="menubar" class="theme-menubar">
    <li
      v-for="(item, index) in data?.ctaList || [1, 2, 3, 4, 5, 6, 7]"
      :key="`link-${index}`"
      class="theme-menuitem"
      data-bs-dismiss="offcanvas"
      role="menuitem"
    >
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <!-- TODO: handle active class dynamically when navigation is used in multiple pages  -->
        <NuxtLink
          :data-testid="`${dataTestId}-${index}`"
          :to="item?.url"
          :class="['nav-link theme-nav-link', { 'active-link': index === 0 }]"
        >
          {{ item?.label }}
        </NuxtLink>
      </BaseSkeletonLoader>
    </li>
  </ul>
</template>
