<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData(
  'widget-description-address-verification-screen'
);

const { getPersonalInfo } = useComposite();

const userAddress = ref({
  isPending: true,
  address: {},
});

onMounted(async () => {
  const data = await getPersonalInfo();
  userAddress.value.isPending = false;
  userAddress.value.address = data.homeAddress;
});

const addressData = computed(() => ({
  address1: `${userAddress?.value.address?.address1}, ${userAddress?.value.address?.address2}`,
  city: `${userAddress?.value.address?.city}, ${userAddress?.value.address?.stateCode}`,
}));

const copyPlaceHolder: TPlaceHolder[] = [
  { col: 8, size: 'lg' },
  { col: 10, size: 'lg' },
];
</script>

<template>
  <div class="theme-info-verification-description-content">
    <BaseSkeletonLoader
      :is-loading="pending || userAddress.isPending"
      :rows="copyPlaceHolder"
    >
      <InfoVerificationDescription
        v-if="userAddress?.address"
        verification-type="address"
        :copy-line-one="data?.empData[0]"
        :text-one="addressData?.address1"
        :copy-line-two="data?.empData[1]"
        :text-two="addressData?.city"
      />
    </BaseSkeletonLoader>
  </div>
</template>
