<script setup lang="ts">
import { JobStatus, UserData } from '@/constants/verification';

interface Props {
  copyLineOne: string;
  copyLineThree?: string;
  copyLineTwo?: string;
  textOne: string;
  textTwo?: string;
  verificationType:
    | JobStatus.EMPLOYEE
    | JobStatus.SELF
    | JobStatus.ASSISTANCE
    | UserData.ADDRESS
    | UserData.FINANCE;
}

defineProps<Props>();
</script>

<template>
  <div class="theme-info-verification-description">
    <div v-if="[JobStatus.EMPLOYEE, UserData.ADDRESS].includes(verificationType)"
    >
      <p>
        {{ copyLineOne }} <span>{{ textOne }}</span> {{ copyLineTwo }}
        <span>{{ textTwo }}</span
        >?
      </p>
    </div>
    <div
      v-else-if="
        [JobStatus.SELF, JobStatus.ASSISTANCE].includes(verificationType)
      "
    >
      <p>
        {{ copyLineOne }} <span>{{ textOne }}</span
        >?
      </p>
    </div>
    <div v-else-if="verificationType === UserData.FINANCE">
      <p>
        {{ copyLineOne }} <span>{{ textOne }}</span> {{ copyLineTwo }}
        <span>{{ textTwo }}</span
        >? {{ copyLineThree }}
      </p>
    </div>
  </div>
</template>
