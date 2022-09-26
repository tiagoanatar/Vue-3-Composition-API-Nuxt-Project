<script setup lang="ts">
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-global-navigation-desktop');
const dataTestId = 'global-navigation-desktop-cta';
</script>

<template>
  <ul role="menubar" class="theme-menubar">
    <li
      v-for="(item, index) in data?.ctaList || [1, 2, 3, 4]"
      :key="`link-${index}`"
      :data-testid="`${dataTestId}-${index}`"
      class="theme-menuitem"
      data-bs-dismiss="offcanvas"
      role="menuitem"
    >
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
        class="nav-link theme-nav-link"
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
