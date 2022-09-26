<script setup lang="ts">
import { IconNames } from '@/constants/icons';
import { Routes } from '@/constants/pages';
const { getPlaidCardManualData } = useContentful();
const { data, pending } = getPlaidCardManualData(
  'widget-plaid-card-verify-finances'
);

const accordionData = reactive({
  dataTestId: 'connect-plaid-manually',
  id: 'verify-finances-manually',
  items: [
    {
      heading: '',
      id: 'verify-manually',
    },
  ],
});

const content = {
  manually: {
    link: Routes.UploadNewDocument,
    testId: 'connect-plaid-manually-link',
    aria: 'connect plaid manually link',
  },
};

watchEffect(() => {
  if (data?.value?.accordionLabel) {
    accordionData.items[0].heading = data?.value?.accordionLabel;
  }
});
</script>

<template>
  <BaseCard
    is-base-card
    data-test-id="dataTestId"
    class="theme-verify-plaid-card"
  >
    <div class="row">
      <div class="col">
        <BaseKeyValueText
          :is-loading="pending"
          text-direction="row"
          data-test-id="input-manually-card-heading"
        >
          <template #label>
            <h2>{{ data?.title }}</h2>
          </template>
          <template #value>
            <img :src="data?.icon" :alt="data?.iconAlt" />
          </template>
        </BaseKeyValueText>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <p>
          {{ data?.description }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <BaseAccordion v-bind="accordionData">
          <BaseSkeletonLoader :is-loading="pending"></BaseSkeletonLoader>
          <ul>
            <li v-for="(item, index) in data?.accordionContent" :key="index">
              {{ item }}
            </li>
          </ul>
        </BaseAccordion>
      </div>
      <div class="col-3 d-flex justify-content-end">
        <NuxtLink
          :to="content.manually.link"
          :data-test-id="content.manually.testId"
          :aria-label="content.manually.aria"
          ><BaseIcon :name="IconNames.ArrowRight"
        /></NuxtLink>
      </div>
    </div>
  </BaseCard>
</template>
