<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

interface Props {
  iconName: 'approved' | 'scheduled';
  label: string;
  date?: string;
  dataTestId: string;
}

defineProps<Props>();
</script>

<template>
  <div class="theme-loan-tracker-banner" :data-test-id="dataTestId">
    <BaseIcon :color="Colors.AABlackBlue" :name="IconNames[iconName]" />
    {{ label }} {{ date }}
  </div>
</template>
