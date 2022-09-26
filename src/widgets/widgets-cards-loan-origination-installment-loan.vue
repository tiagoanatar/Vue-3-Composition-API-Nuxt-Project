<script setup lang="ts">
const { getLoanOriginationSummaryCardData } = useContentful();
const { data, pending } = getLoanOriginationSummaryCardData(
  'widget-card-loan-origination-installment-loan'
);
const router = useRouter();

const accordionData = reactive({
  dataTestId: `installment-loan`,
  id: 'testIdIL',
  items: [
    {
      heading: 'Customize loan details',
      id: 'installmentLoan',
    },
  ],
});

const selectMockData = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
];

watch(data, () => {
  accordionData.items[0].heading = data?.value[7]?.fields?.label;
});

// TODO: Temporary redirect function. Will be replaced when services are in place.
function redirect() {
  setTimeout(
    () =>
      router.push(
        '/loan-origination/installment-loan/new-customer/money-destination'
      ),
    3000
  );
}
</script>
<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 5 }]">
    <BaseCard data-test-id="payday-loan">
      <template #header>
        <p>{{ data[0]?.fields?.label }}</p>
        <p>test value</p>
      </template>
      <template #title>
        <div class="row">
          <div class="col">
            <h2>{{ data[1]?.fields?.label }}</h2>

            <NuxtLink
              aria-controls="just-a-moment"
              class="theme-btn btn btn-md btn-secondary theme-btn-desktop"
              data-test-id="credit-line"
              data-bs-target="#just-a-moment"
              data-bs-toggle="modal"
              @click="redirect"
            >
              {{ data[6]?.fields?.label }}
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #text>
        <div class="row theme-multi-offer-info">
          <div
            v-for="(item, index) in data.keyValues"
            :key="index"
            class="col-12 col-lg-3"
          >
            <BaseKeyValueText
              :is-loading="pending"
              data-test-id="test1"
              :label="item"
              value="test value"
              text-direction="row"
            />
          </div>
        </div>
      </template>
      <div class="row">
        <div class="col theme-multi-offer-details">
          <NuxtLink
            aria-controls="just-a-moment"
            class="theme-btn btn btn-md btn-secondary theme-btn-mobile"
            data-test-id="credit-line"
            data-bs-target="#just-a-moment"
            data-bs-toggle="modal"
            @click="redirect"
          >
            {{ data[6]?.fields?.label }}
          </NuxtLink>
          <BaseAccordion v-bind="accordionData">
            <h3>{{ data[8]?.fields?.label }}</h3>
            <p>0 Apr</p>
            <div class="row">
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[2]?.fields?.label"
                  value="test value"
                />
              </div>
              <div class="col-12 col-lg-8">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[3]?.fields?.label"
                  value="test value"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-4 order-lg-1">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[5]?.fields?.label"
                  value="test value"
                />
              </div>
              <div class="col-10 col-lg-4 order-lg-2">
                <BaseSelectInput
                  id="installmentLoan"
                  :items="selectMockData"
                  data-test-id="installment-loan"
                  :label="data[9]?.fields?.label"
                  name="installment-loan"
                />
              </div>
              <div class="col-12 col-lg-4 order-lg-3">
                <BaseKeyValueText
                  :is-loading="pending"
                  class="theme-total"
                  data-test-id="test1"
                  :label="data[10]?.fields?.label"
                  value="test value"
                />
              </div>
            </div>

            <h4>{{ data[11]?.fields?.label }}</h4>
            <p>{{ data[12]?.fields?.label }}</p>
            <NuxtLink
              class="theme-draw-amount-link"
              aria-controls="termsModal"
              :data-test-id="`modal-link`"
              data-bs-target="#termsModal"
              data-bs-toggle="offcanvas"
            >
              {{ data[13]?.fields?.label }}
            </NuxtLink>
          </BaseAccordion>
        </div>
      </div>
    </BaseCard>
  </BaseSkeletonLoader>
  <WidgetsModalTransparentJustMoment />
  <WidgetsModalTermsAndConditions />
</template>
