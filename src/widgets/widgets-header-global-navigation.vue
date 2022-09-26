<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';

// TODO: labels should be coming from contentful
const dataTestId = 'global-navigation-mobile-header',
  notificationLabel = 'Notifications',
  closeMenuLabel = 'Close menu',
  newNotificationLabel = 'New Notification alerts';

let username = ref(null);
// Used to show the skeleton loading till the api fetched user name
const isUserNamePending = ref(true);

onMounted(async () => {
  const { getUser } = useAuthClient();
  const { name } = await getUser();
  // TODO: handle user name when token is expired
  username.value = name;
  isUserNamePending.value = false;
});

// TODO : Backend API integration to get the new notification flag
const hasNotification = true;
</script>

<template>
  <div class="theme-nav-header">
    <WidgetsCtaApplyNowGlobalNavigation />

    <BaseSkeletonLoader
      :is-loading="isUserNamePending"
      :rows="[{ col: 12, size: 'sm' }]"
      class="theme-user-name theme-user-name-mobile"
    >
      <span class="theme-user-name theme-user-name-mobile">{{ username }}</span>
    </BaseSkeletonLoader>

    <BaseSkeletonLoader
      :is-loading="isUserNamePending"
      :rows="[{ col: 12, size: 'lg' }]"
      class="theme-user-icon theme-user-name-desktop"
    >
      <!-- TODO: remove hardcoded link once we have code to map label to url -->
      <NuxtLink to="/profile/menu-page">
        <BaseIcon
          :color="Colors.White"
          :name="IconNames.User"
          :size="IconSizes.Medium"
          class="theme-user-icon theme-user-name-desktop"
        />
      </NuxtLink>
    </BaseSkeletonLoader>

    <div class="theme-button-wrapper">
      <button
        :data-testid="`${dataTestId}-notification`"
        :aria-label="notificationLabel"
        class="navbar-toggler theme-notification-btn"
      >
        <span v-if="hasNotification" class="theme-navbar-notification-dot">
          <span class="visually-hidden">{{ newNotificationLabel }}</span>
        </span>
        <BaseIcon
          :color="Colors.White"
          :name="IconNames.NotificationBell"
          :size="IconSizes.Medium"
        />
      </button>
      <button
        :data-testid="`${dataTestId}-close-menu`"
        :aria-label="closeMenuLabel"
        class="navbar-toggler"
        data-bs-dismiss="offcanvas"
      >
        <BaseIcon
          :color="Colors.White"
          :name="IconNames.X"
          :size="IconSizes.Medium"
        />
      </button>
    </div>
  </div>
</template>
