<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { throttleFunc } from '@/utils/throttle-debounce';
const { getImagesData } = useContentful();
const { data, pending } = getImagesData('widget-logo-global-navigation');

const notificationAlertsLabel = 'New notification alerts',
  dataTestId = 'global-navigation',
  hamburgerLabel = 'Open Menu',
  hasNotification = true,
  menuLabel = 'menu';

const scrollInterval = 25;
const minScrollPos = 80;

let prevScrollPosition = ref(0),
  isShowNavbar = ref(true);

const onScrollHandler = () => {
  // Get the current scroll position
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Here we determine whether we need to show or hide the navbar
  isShowNavbar.value =
    currentScrollPosition < prevScrollPosition.value
      ? true
      : currentScrollPosition < minScrollPos;

  // Set the current scroll position as the last scroll position
  prevScrollPosition.value = currentScrollPosition;
};

const optimizedOnScrollHandler = throttleFunc(onScrollHandler, scrollInterval);

onMounted(() => {
  window.addEventListener('scroll', optimizedOnScrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', optimizedOnScrollHandler);
});
</script>

<template>
  <nav
    :class="[
      'navbar navbar-expand-md theme-navbar',
      { 'theme-navbar--hide': !isShowNavbar },
    ]"
    :aria-label="menuLabel"
    :data-testid="dataTestId"
  >
    <div class="container">
      <NuxtLink to="/" :data-testid="`${dataTestId}-home-link`">
        <BaseSkeletonLoader
          :is-loading="pending"
          class="theme-brand-logo-mobile"
        >
          <img
            class="theme-brand-logo-mobile"
            :src="data.mobile.url"
            :alt="data.mobile.name"
          />
        </BaseSkeletonLoader>
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ size: 'lg' }]"
          class="theme-brand-logo-desktop"
        >
          <img
            class="theme-brand-logo-desktop"
            :src="data.desktop.url"
            :alt="data.desktop.name"
          />
        </BaseSkeletonLoader>
      </NuxtLink>
      <button
        :class="[
          'navbar-toggler',
          { 'theme-navbar-notification': hasNotification },
        ]"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarMain"
        aria-controls="navbarMain"
        aria-expanded="false"
        :aria-label="hamburgerLabel"
        :data-testid="`${dataTestId}-open-menu`"
      >
        <span class="theme-navbar-notification-dot">
          <span class="visually-hidden">{{ notificationAlertsLabel }}</span>
        </span>
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.HamburgerMenu"
          :size="IconSizes.Medium"
        />
      </button>
      <div id="navbarMain" class="offcanvas offcanvas-end theme-navbar-content">
        <WidgetsHeaderGlobalNavigation />
        <div class="theme-menu-links-mobile">
          <WidgetsCtaGlobalNavigationMobile />
        </div>
        <div class="theme-menu-links-desktop">
          <WidgetsCtaGlobalNavigationDesktop />
        </div>
        <div class="theme-nav-footer">
          <WidgetsCtaProfileLogout />
          <WidgetsModalProfileLogout />
        </div>
      </div>
    </div>
  </nav>
</template>
