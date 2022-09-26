<script setup lang="ts">
const { getDisclosureData } = useContentful();
const { data, pending } = getDisclosureData('widget-disclosure-re-apply');
</script>

<template>
  <div class="theme-review-disclosures-content">
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
      <p>
        {{ data?.copy }}
      </p>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
      <button
        class="btn btn-link theme-disclosure-link"
        aria-controls="disclosure-electronic-communication"
        data-bs-target="#disclosure-electronic-communication"
        data-bs-toggle="offcanvas"
        :data-test-id="`${data?.caElectronicPolicyLink}-modal-link`"
      >
        {{ data?.caElectronicPolicyLink }}
      </button>
      <WidgetsModalDisclosureElectronicCommunications />
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 4 }]">
      <button
        class="btn btn-link theme-disclosure-link"
        aria-controls="disclosure-ca-privacy-policy"
        data-bs-target="#disclosure-ca-privacy-policy"
        data-bs-toggle="offcanvas"
        :data-test-id="`${data?.caPrivacyPolicyLink}-modal-link`"
      >
        {{ data?.caPrivacyPolicyLink }}
      </button>
      <WidgetsModalDisclosureCaPrivacyPolicy />
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
      <p>
        {{ data?.copyLine2 }}
      </p>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
      <p>
        {{ data?.copyLine3 }}
      </p>
    </BaseSkeletonLoader>
  </div>
</template>
