<script setup lang="ts">
import { IconNames } from '@/constants/icons';
const { getCtaData } = useContentful();
const { mapCtaRoutes } = useCtaRoute();
const { data, pending } = getCtaData('widget-ctas-upload-new-document');
const uploadDocumentsCta = reactive({
  items: [],
});

watchEffect(() => {
  if (data?.value?.ctaList) {
    uploadDocumentsCta.items = data?.value?.ctaList.map((cta) => ({
      ...cta,
      route: mapCtaRoutes(cta?.label),
    }));
  }
});
</script>

<template>
  <div class="row theme-cta-upload-documents">
    <div
      v-for="(cta, index) in uploadDocumentsCta?.items || [1, 2, 3, 4]"
      :key="`cta-item-${cta.label}`"
      class="col-12"
    >
      <BaseSkeletonLoader
        :is-loading="pending"
        :rows="[{ col: 8, size: 'lg' }]"
      >
        <BaseCard is-base-card :data-test-id="`upload-documents-${index}`">
          <BaseKeyValueText
            :data-test-id="`upload-documents-${index}`"
            text-direction="row"
            :is-loading="pending"
          >
            <template #label>
              <p>{{ cta.label }}</p>
            </template>
            <template #value>
              <NuxtLink
                :data-testid="`upload-documents-link-${index}`"
                :aria-label="cta.label"
                :to="cta.route"
                ><BaseIcon :name="IconNames.ArrowRight"
              /></NuxtLink>
            </template>
          </BaseKeyValueText>
        </BaseCard>
      </BaseSkeletonLoader>
    </div>
  </div>
</template>
