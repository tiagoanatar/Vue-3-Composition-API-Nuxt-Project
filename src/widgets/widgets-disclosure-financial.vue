<script setup lang="ts">
import { useLoanStatusSchema } from '@/composables/schemas/useSchemas';
import { Routes } from '@/constants/pages';

const router = useRouter();
const schema = useLoanStatusSchema();
const id = 'disclosureForm';

const { getDisclosureState, postDisclosure } = useComposite();
const { getDisclosureData } = useContentful();
const { data, pending } = getDisclosureData('widget-disclosure-financial');
const { setLoadingState } = useFormValidState();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

const userData = ref({
  pending: true,
  data: {
    codesList: {},
    response: {},
  },
  activateSchema: true,
});

onMounted(async () => {
  setLoadingState(true);
  await getDefaultData();
  userData.value.data = await getDisclosureState();
  userData.value.pending = false;
  setLoadingState(false);
});

onBeforeUnmount(async () => {
  await removeSaveAndExitData();
});

const loanStatus = reactive({
  value: '',
  options: [],
});

watch(userData?.value, () => {
  if (!userData?.value?.data?.codesList?.tnpdlexcloanins?.disclosureCode) {
    userData.value.activateSchema = false;
  }
});

function changeRadioValue(value: string) {
  loanStatus.value = value;
}

async function handleSubmit() {
  setLoadingState(true);

  await postDisclosure(loanStatus.value);
  router.push(Routes.FinancialSuccessMessage);

  setLoadingState(false);
}
</script>

<template>
  <div class="theme-disclosure">
    <BaseSkeletonLoader :is-loading="userData.pending" :rows="[{ col: 12 }]">
      <div v-if="userData?.data?.codesList?.tnpdlexcloanins?.disclosureCode">
        <p class="theme-disclosure-form-title">
          {{ data?.labelFormTitle }}
        </p>
        <BaseForm
          id="formFinancialSummary"
          :data-test-id="id"
          :submit="handleSubmit"
          :schema="userData.activateSchema ? schema : ''"
          hide-submit
        >
          <BaseRadioButton
            id="loanStatus-0"
            :checked-value="loanStatus.value"
            :data-test-id="`${id}-status-0`"
            :is-loading="pending"
            :is-validate-disabled="false"
            :label="data?.labelFormYes"
            :value="data?.labelFormYes"
            name="loanStatus"
            @click="changeRadioValue"
          />
          <BaseRadioButton
            id="loanStatus-1"
            :checked-value="loanStatus.value"
            :data-test-id="`${id}-status-1`"
            :is-loading="pending"
            :is-validate-disabled="false"
            :label="data?.labelFormNo"
            :value="data?.labelFormNo"
            name="loanStatus"
            @click="changeRadioValue"
          />
        </BaseForm>
      </div>
      <p class="theme-disclosure-bottom-margin-large theme-disclosure-center-text theme-disclosure-small-text"
      >
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          {{ data?.labelFicoScore }}
        </BaseSkeletonLoader>
      </p>
      <p class="theme-disclosure-bottom-margin">
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          {{ data?.copy }}
        </BaseSkeletonLoader>
      </p>
      <div
        v-if="userData?.data?.codesList?.ecc?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-electronic-communication"
            data-bs-target="#disclosure-electronic-communication"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.ecc.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.ecc?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureElectronicCommunications />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.pfpp?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-privacy-policy"
            data-bs-target="#disclosure-privacy-policy"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.pfpp.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.pfpp?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosurePrivacyPolicy />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.capp?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-ca-privacy-policy"
            data-bs-target="#disclosure-ca-privacy-policy"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.capp.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.capp?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureCaPrivacyPolicy />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.tnpdlexcloanins?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-exceeding-maximum"
            data-bs-target="#disclosure-exceeding-maximum"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.tnpdlexcloanins.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.tnpdlexcloanins?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureExceedingMaximum />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.txpdlcab?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-pdl-cab"
            data-bs-target="#disclosure-pdl-cab"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.txpdlcab.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.txpdlcab?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosurePdlCab />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.txtlpcab?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-tlp-cab"
            data-bs-target="#disclosure-tlp-cab"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.txtlpcab.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.txtlpcab?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureTlpCab />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.mspdlpamphlet?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-mississippi-consumer"
            data-bs-target="#disclosure-mississippi-consumer"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.mspdlpamphlet.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.mspdlpamphlet?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureMississippiConsumer />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.deilprate?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-rate-schedule"
            data-bs-target="#disclosure-rate-schedule"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.deilprate.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.deilprate?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureRateSchedule />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.ohilpprincipal?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-outstanding-principal"
            data-bs-target="#disclosure-outstanding-principal"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.ohilpprincipal.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.ohilpprincipal?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureRateSchedule />
        </BaseSkeletonLoader>
      </div>
      <div
        v-if="userData?.data?.codesList?.wypdlnotice?.disclosureCode"
        class="theme-disclosure-container theme-disclosure-bottom-margin"
      >
        <BaseSkeletonLoader
          :is-loading="userData.pending"
          :rows="[{ col: 12 }]"
        >
          <NuxtLink
            class="theme-disclosure-link"
            aria-controls="disclosure-post-dated"
            data-bs-target="#disclosure-post-dated"
            data-bs-toggle="offcanvas"
            :data-test-id="`${userData?.data?.codesList?.wypdlnotice.disclosureCode}-modal-link`"
          >
            {{ userData?.data?.codesList?.wypdlnotice?.disclosure }}
          </NuxtLink>
          <WidgetsModalDisclosureRateSchedule />
        </BaseSkeletonLoader>
      </div>
    </BaseSkeletonLoader>
  </div>
</template>
