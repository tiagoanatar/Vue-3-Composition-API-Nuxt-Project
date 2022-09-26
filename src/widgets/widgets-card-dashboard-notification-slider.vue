<script setup lang="ts">
const { getNotificationsSliderData } = useContentful();
const { data, pending } = getNotificationsSliderData(
  'widget-dashboard-notification-slider'
);

//TODO : wire API data
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
  <NotificationSlider
    :section-title="data?.sectionTitle || ''"
    :link-title="data?.linkTitle || ''"
    :data="notificationData"
    :is-loading="pending"
  />
</template>
