<script setup lang="ts">
import { ContentLabels } from '@/constants/content-labels';
const { isMobile } = useIsMobileDevice();
interface ContentListItem {
  contentItemDescription: string;
  contentItemLabel: string;
}

interface Props {
  contentListItems?: ContentListItem[];
  dataTestId: string;
  heading?: string;
  isLoading?: boolean;
  totalContentListCount?: number;
  id?: number;
}

withDefaults(defineProps<Props>(), {
  contentListItems: () => [
    { contentItemLabel: '', contentItemDescription: '' },
  ],
  heading: '',
  totalContentListCount: 1,
  id: 0,
});
</script>
<template>
  <div
    class="theme-contact-us-content-description"
    :class="[!id ? 'first-description-block' : '']"
    :data-test-id="`${dataTestId}-container`"
  >
    <BaseKeyValueText
      :data-test-id="`${dataTestId}-heading`"
      :label="heading"
      :is-loading="isLoading"
      text-direction="row"
      type="heading"
    />
    <BaseKeyValueText
      v-for="(item, index) in contentListItems || Array(totalContentListCount)"
      :key="`list-item-${index}`"
      :is-loading="isLoading"
      :label="item?.contentItemLabel"
      :value="
        item?.contentItemLabel === ContentLabels.Phone && isMobile
          ? ''
          : item?.contentItemDescription
      "
      :data-test-id="`${dataTestId}-list-item-${index}`"
      text-direction="row"
    >
      <template #value>
        <!--
        NOTE: Using Anchor tag instead of NuxtLink since NuxtLink is used for all internal navigation and external protocols need to be handled using <a/> tag. 
        Refer: https://nuxtjs.org/docs/features/nuxt-components#the-nuxtlink-component
        -->
        <a
          v-if="item?.contentItemLabel === ContentLabels.Phone && isMobile"
          :href="`tel:${item?.contentItemDescription}`"
        >
          {{ item?.contentItemDescription }}
        </a>
      </template>
    </BaseKeyValueText>
  </div>
</template>
