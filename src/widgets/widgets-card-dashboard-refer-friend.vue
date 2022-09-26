<script setup lang="ts">
const { getReferFriendCardData } = useContentful();
const { data, pending } = getReferFriendCardData(
  'widget-dashboard-refer-a-friend'
);

const clickHandler = () => {
  // TODO: Should be replaced with actual business logic
  console.log('ReferFriend');
};
</script>
<template>
  <BaseCard
    is-base-card
    data-test-id="refer-friend-card"
    class="theme-refer-friend-card"
  >
    <div
      class="theme-refer-friend-card-background"
      :style="{ backgroundImage: `url(${data?.backgroundSrc})` }"
    />
    <div class="theme-refer-friend-card-content">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 12, size: 'lg' }]"
      >
        <h2 class="card-title">
          {{ data?.title }}
        </h2>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      ></BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
        <p class="card-text">
          {{ data?.copy }}
        </p>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8 }]"
      ></BaseSkeletonLoader>
    </div>
    <div class="btn-container">
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 4, size: 'lg' }]"
      >
        <BaseButton
          :label="data?.btnLabel"
          variation="secondary"
          data-test-id="refer-friend-btn"
          @click="clickHandler"
        />
      </BaseSkeletonLoader>
    </div>
  </BaseCard>
</template>
