<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames, IconSizes } from '@/constants/icons';
import { Routes } from '@/constants/pages';
const { getMyDocumentsInfoData } = useContentful();
const { data, pending } = await getMyDocumentsInfoData(
  'widgets-documents-my-documents'
);

// TODO: To replace with api response
let contentsData = {
  Agreements: [
    {
      id: 'example1-id8',
      content: 'Agreement, 01/22/22',
    },
  ],
};
</script>

<template>
  <div class="theme-profile-my-documents-contents">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
      <h2>{{ data?.docList[0]?.label }}</h2>
    </BaseSkeletonLoader>
    <!-- TODO: To implement download functionality once API is ready -->
    <ul>
      <li>
        <NuxtLink to="/">
          <BaseKeyValueText
            label="Government ID"
            text-direction="row"
            data-test-id="my-docs-content"
            :is-loading="pending"
            type="icon"
          >
            <template #value>
              <BaseIcon
                :color="Colors.Black"
                :name="IconNames.DownloadCloud"
                :size="IconSizes.Medium"
              />
            </template>
          </BaseKeyValueText>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <BaseKeyValueText
            label="Payday2021.pdf"
            text-direction="row"
            data-test-id="my-docs-content-second"
            :is-loading="pending"
            type="icon"
          >
            <template #value>
              <BaseIcon
                :color="Colors.Black"
                :name="IconNames.DownloadCloud"
                :size="IconSizes.Medium"
              />
            </template>
          </BaseKeyValueText>
        </NuxtLink>
      </li>
    </ul>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 4 }]">
      <div class="theme-profile-my-documents-contents-upload">
        <BaseIcon :name="IconNames.DownloadCloud" />
        <NuxtLink
          class="upload"
          data-testid="upload-document"
          aria-label="Upload document"
          :to="Routes.UploadNewDocument"
          >Upload a new document</NuxtLink
        >
      </div>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
      <!-- TODO: To implement download functionality once API is ready -->
      <div
        v-for="(newData, index) in data?.docList"
        :key="index"
        class="theme-documents-accordion"
        :data-test-id="dataTestId"
      >
        <h2 v-if="newData.label !== 'Uploaded Documents'">
          {{ `${newData?.label} #2456456` }}
        </h2>
        <BaseAccordion
          :id="id"
          :items="newData?.subHeadings"
          :data-test-id="dataTestId"
        >
          <ul>
            <li
              v-for="(doc, newIndex) in contentsData[
                newData?.subHeadings?.[0]?.heading
              ]"
              :key="newIndex"
            >
              <NuxtLink to="/">
                <BaseKeyValueText
                  :label="doc?.content"
                  :data-test-id="`accordion-my-docs-${newIndex}`"
                  icon-name="DownloadCloud"
                  text-direction="row"
                  type="icon"
                >
                  <template #value>
                    <BaseIcon
                      :color="Colors.Black"
                      :name="IconNames.DownloadCloud"
                      :size="IconSizes.Medium"
                    />
                  </template>
                </BaseKeyValueText>
              </NuxtLink>
            </li>
          </ul>
        </BaseAccordion>
      </div>
    </BaseSkeletonLoader>
  </div>
</template>
