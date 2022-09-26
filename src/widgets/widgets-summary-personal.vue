<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { ssnMask } from '@/constants/masks';

const { getSummaryData } = useContentful();
const { getPersonalInfo } = useComposite();
const { data, pending } = getSummaryData('widget-review-personal-review');

const userData = ref({
  pending: true,
  data: {},
});

onMounted(async () => {
  const data = await getPersonalInfo();
  const ssnValue = ssnMask(data?.personal?.ssn || '');

  userData.value.pending = false;
  userData.value.data = { ...data, ssnValue };
});
</script>

<template>
  <div class="theme-loan-application-summary">
    <h2 class="theme-personal-summary-headline">
      <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
        {{ data?.headline }}
      </BaseSkeletonLoader>
    </h2>
    <div class="theme-personal-summary theme-summary-card">
      <BlockRow class="theme-summary-card-header">
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          <p>{{ data?.subHeadline }}</p>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          <NuxtLink :to="Routes.PersonalInformation">
            {{ data?.editCta }}
          </NuxtLink>
        </BaseSkeletonLoader>
      </BlockRow>
      <dl>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelFirstName }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ userData?.data?.firstName }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelLastName }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ userData?.data?.lastName }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ data?.labelBirthday }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 1 }]"
          >
            {{ userData?.data?.dateOfBirth }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ data?.labelAddress }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ userData?.data?.address }}
          </BaseSkeletonLoader>
        </dd>
        <dt v-if="userData?.data?.personal?.driversLicense || pending">
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            Drivers License
          </BaseSkeletonLoader>
        </dt>
        <dd v-if="userData?.data?.personal?.driversLicense || pending">
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ userData?.data?.personal?.driversLicense }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 1 }]">
            {{ data?.labelEmail }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ userData?.data?.email }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelPhoneNumber }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 1 }]"
          >
            {{ userData?.data?.currentPhone }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 1 }]">
            {{ data?.labelSsn }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 1 }]"
          >
            {{ userData?.data?.ssnValue }}
          </BaseSkeletonLoader>
        </dd>
      </dl>
    </div>
  </div>
</template>
