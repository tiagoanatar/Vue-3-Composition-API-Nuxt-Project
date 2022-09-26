<script setup lang="ts">
import { Pages } from '@/constants/pages';

const { getContactInfoData } = useContentful();
const { data, pending } = getContactInfoData(
  'widget-contact-info-profile-contact-us'
);
</script>

<template>
  <div class="theme-contact-us-content">
    <ContactUsDetailsBlock
      v-for="(item, index) in pending ? [1, 2, 3] : data?.contactInfoContent"
      :id="index"
      :key="`list-${index}`"
      :data-test-id="`${
        pending
          ? `${Pages.ContactUs}-loading-${index}`
          : `${Pages.ContactUs}-${index}`
      }`"
      :content-list-items="item?.contentListItems"
      :total-content-list-count="2"
      :heading="item.heading"
      :is-loading="pending"
    />
  </div>
</template>
