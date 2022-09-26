<script setup lang="ts">
interface Props {
  dataTestId: string;
  description: string;
  heading: string;
}

defineProps<Props>();
</script>

<template>
  <div class="theme-notification">
    <BaseCard is-base-card :data-test-id="`${dataTestId}-notification-card`">
      <div class="theme-notification-content">
        <!-- TODO:Img will be Replace with icon  -->
        <img
          class="theme-notification-content-logo"
          src="~@/assets/images/temp-notification.svg"
          alt="Notification Logo"
        />
        <div class="theme-notification-content-wrapper">
          <p class="theme-notification-content-wrapper-heading">
            {{ heading }}
          </p>
          <p class="theme-notification-content-wrapper-description">
            {{ description }}
          </p>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
