<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';

interface Item {
  name: string;
  url: string;
}

interface Props {
  closeMenuLabel?: string;
  darkLabel: string;
  hamburgerLabel?: string;
  items: Item[];
  lightLabel: string;
  logOutLabel: string;
  membershipDateText: string;
  menuLabel: string;
  dataTestId: string;
  userName: string;
  hasNotification: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  closeMenuLabel: 'Close Menu',
  hamburgerLabel: 'Open Menu',
});
</script>
<template>
  <!-- TODO: Change "-xxxl" to "-sm" or "-md" once there are desktop designs -->
  <nav
    class="navbar navbar-expand-xxxl"
    :aria-label="menuLabel"
    :data-testid="dataTestId"
  >
    <!-- TODO: Remove "container-fluid" class when adding styles -->
    <div class="container-fluid">
      <NuxtLink to="/" :data-testid="`${dataTestId}-home-link`">
        <img
          src="~@/assets/images/logo-full-dark.svg"
          alt="Advance America Logo"
        />
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
          <span class="visually-hidden">New alerts</span>
        </span>
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.HamburgerMenu"
          :size="IconSizes.Medium"
        />
      </button>
      <div id="navbarMain" class="offcanvas offcanvas-end theme-navbar-content">
        <button
          :data-testid="`${dataTestId}-close-menu`"
          :aria-label="closeMenuLabel"
          class="navbar-toggler"
          data-bs-dismiss="offcanvas"
        >
          <BaseIcon
            :color="Colors.White"
            :name="IconNames.X"
            :size="IconSizes.Large"
          />
        </button>

        <!-- TODO:
          Add the right data source for the user name and member since,
          this could come from a prop or a global state
        -->
        <span>{{ userName }}</span>
        <span>{{ membershipDateText }}</span>

        <ul role="menubar">
          <li
            v-for="(item, index) in props.items"
            :key="item.name"
            role="menuitem"
            data-bs-dismiss="offcanvas"
          >
            <NuxtLink
              :data-testid="`${dataTestId}-navigation-item-${index}`"
              :to="item.url"
              class="nav-link"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <div>
          <!-- TODO: Add the functionality to logout and dark/light theme switch -->
          <NuxtLink to="/" :data-testid="`${dataTestId}-log-out`">
            {{ props.logOutLabel }}
          </NuxtLink>
          <BaseButton v-if="props.lightLabel" :label="props.lightLabel" />
          <BaseButton v-if="props.darkLabel" :label="props.darkLabel" />
        </div>
      </div>
    </div>
  </nav>
</template>
