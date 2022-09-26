<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { TPlaceHolder } from '@/constants/bootstrap';
const { setLoadingState } = useFormValidState();
const { getPersonalInfo } = useComposite();
const { getDefaultData } = useDefaultData();
const { getCtaData } = useContentful();

const { data, pending } = getCtaData('widget-cta-address-verification-screen');

const router = useRouter();

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];

const checkIdentityData = ref(null);
const checkAddressData = ref(null);

enum StateCodes {
  FL = 'FL',
  MI = 'MI',
}

function handleRedirectUponStateCode() {
  if (
    [StateCodes.FL, StateCodes.MI].includes(
      checkAddressData.value?.stateCode
    ) &&
    !checkIdentityData.value.driversLicense
  ) {
    router.push(Routes.ReApplyIdentity);
  } else {
    router.push(Routes.ReviewDisclosures);
  }
}

onMounted(async () => {
  setLoadingState(true);
  const { userData: data } = await getDefaultData(getPersonalInfo);
  const stateCode = data?.homeAddress;
  const personal = data?.personal;
  checkIdentityData.value = personal;
  checkAddressData.value = stateCode;
  setLoadingState(false);
});
</script>

<template>
  <div class="theme-info-verification-cta d-flex flex-column">
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <BaseButton
        :label="data?.ctaList[0]?.label"
        data-test-id="verify-address-yes"
        @click="handleRedirectUponStateCode"
      />
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
      <NuxtLink
        data-test-id="verify-address-no"
        :to="Routes.ReApplyAddress"
        class="theme-btn btn btn-lg btn-secondary"
      >
        <span>{{ data?.ctaList[1]?.label }}</span>
      </NuxtLink>
    </BaseSkeletonLoader>
  </div>
</template>
