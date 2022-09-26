<script setup lang="ts">
import { IconNames } from '@/constants/icons';

interface Props {
  ctaLabel: string;
  modal: {
    ctaLabel: string;
    headline: string;
    image: string;
    subheadline: string;
  };
}

defineProps<Props>();
</script>

<template>
  <div class="theme-loan-application-info-modal">
    <BaseButton
      :icon="IconNames.Info"
      :label="ctaLabel"
      aria-controls="infoModal"
      data-bs-target="#infoModal"
      data-bs-toggle="modal"
      data-test-id="info-modal-open"
      variation="minimal"
    />
    <ClientOnly>
      <BaseModal
        id="infoModal"
        background="blue-image"
        data-test-id="info-modal"
      >
        <template #default>
          <LoanApplicationBodyCopy type="modal">
            <h1>{{ modal.headline }}</h1>
            <p>{{ modal.subheadline }}</p>
            <p
              v-if="modal?.subheadline2"
              class="theme-loan-application-body-copy-bold"
            >
              {{ modal?.subheadline2 }}
            </p>
          </LoanApplicationBodyCopy>
          <BaseButton
            :label="modal.ctaLabel"
            data-bs-dismiss="modal"
            data-test-id="info-modal-dismiss"
            variation="secondary"
          />
        </template>
        <template #footer>
          <img alt="" :src="modal.image" />
        </template>
      </BaseModal>
    </ClientOnly>
  </div>
</template>
