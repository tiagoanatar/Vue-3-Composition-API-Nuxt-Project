<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Notification Slider',
});

//TODO : wire CMS data
const notificationData = [
  {
    dataTestId: 'notification-1',
    description: 'Please check new offers for you',
    heading: 'Get 70% off',
  },
  {
    dataTestId: 'notification-2',
    description: 'Please check new offers for you',
    heading: 'Get 80% off',
  },
  {
    dataTestId: 'notification-3',
    description: 'Please check new offers for you',
    heading: 'Get 90% off',
  },
];
</script>
<template>
  <div class="custom-style">
    <div class="container">
      <h2 class="mt-5">Notification Component</h2>
      <br />
      <NotificationSlider
        :data="notificationData"
        :is-loading="false"
        link-title="See All"
        section-title="Notifications"
      />
      <br />
    </div>
  </div>
</template>
<style scoped lang="scss">
.custom-style {
  height: 100vh;
  background-color: #ecf8fc;
}
</style>
