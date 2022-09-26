<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

interface Props {
  dataTestId: string;
  downloadAriaLabel?: string;
  downloadUrl?: string;
  text?: string;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  downloadAriaLabel: 'download',
  downloadUrl: '~@/assets/images/agreement-preview.svg',
  text: 'Tap to view details',
  title: 'Loan agreement',
});
</script>
<template>
  <BaseCard
    is-base-card
    class="theme-document-thumbnail-card"
    :data-test-id="`${dataTestId}-document-thumbnail-card-container`"
  >
    <div class="container-fluid theme-container-fluid">
      <div class="row theme-document-thumbnail-card-row">
        <img
          class="col-auto document-thumbnail-img"
          :data-testid="`${dataTestId}-document-thumbnail-card-img`"
          :alt="title"
          src="~@/assets/images/document-preview.svg"
        />
        <div class="col document-thumbnail-entry">
          <h2
            class="title"
            :data-testid="`${dataTestId}-document-thumbnail-card-title`"
          >
            {{ title }}
          </h2>
          <div
            class="text"
            :data-testid="`${dataTestId}-document-thumbnail-card-text`"
          >
            {{ text }}
          </div>
        </div>
        <div class="col-auto">
          <a
            class="document-download-link"
            :href="downloadUrl"
            download
            :aria-label="downloadAriaLabel"
            :data-testid="`${dataTestId}-document-thumbnail-card-download-link`"
          >
            <!-- TODO: should be removed once the separate component is created for download icon -->
            <BaseIcon
              :name="IconNames.DownloadCloud"
              :color="Colors.AABlackBlue"
          /></a>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
