<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
interface Props {
  alertType?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'info'
    | 'warning'
    | 'light';
  dataTestId: string;
  hasLargePadding?: boolean;
  iconColor?: Colors;
  iconName?: IconNames;
  iconSize?: IconSizes;
  message?: string;
}

withDefaults(defineProps<Props>(), {
  alertType: 'danger',
  iconColor: Colors.Black,
  iconName: IconNames.AlertCircle,
  iconSize: IconSizes.Large,
  message: 'default message',
});
</script>

<template>
  <div
    :class="[
      {
        'theme-alert-lg': hasLargePadding,
      },
      `alert theme-alert alert-${alertType} alert-dismissible`,
    ]"
    :data-testid="dataTestId"
    role="alert"
  >
    <div class="theme-alert-icon">
      <BaseIcon :name="iconName" :color="iconColor" :size="iconSize" />
    </div>
    <p>{{ message }}</p>
    <!-- TODO: Refactor to allow for button with icon component and open / close functionality -->
  </div>
</template>
