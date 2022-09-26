<script setup lang="ts">
const { getCtaData } = useContentful();
const { data, pending } = getCtaData('widget-cta-logout');
</script>

<template>
  <div class="theme-profile-menu-logout">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6, size: 'lg' }]">
      <button
        aria-controls="logoutModal"
        data-bs-target="#logoutModal"
        data-bs-toggle="modal"
        data-test-id="logout-modal-exit"
      >
        {{ data?.ctaList[0]?.label }}
      </button>
    </BaseSkeletonLoader>
  </div>
</template>
