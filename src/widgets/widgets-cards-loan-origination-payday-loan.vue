<script setup lang="ts">
const { getLoanOriginationSummaryCardData } = useContentful();
const { data, pending } = getLoanOriginationSummaryCardData(
  'widget-card-loan-origination-payday-loan'
);
const router = useRouter();

const accordionData = reactive({
  dataTestId: `payday-loan`,
  id: 'testIdPL',
  items: [
    {
      heading: 'Customize loan details',
      id: 'paydayLoan',
    },
  ],
});

watch(data, () => {
  accordionData.items[0].heading = data?.value[7]?.fields?.label;
});

// TODO: Temporary redirect function. Will be replaced when services are in place.
function redirect() {
  setTimeout(
    () =>
      router.push(
        '/loan-origination/payday-loan/new-customer/money-destination'
      ),
    3000
  );
}
</script>
<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
    <BaseCard data-test-id="payday-loan">
      <template #header
        ><p>{{ data[0]?.fields?.label }}</p>
        <p>test value</p></template
      >
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
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[9]?.fields?.label"
                  value="test value"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-10 col-lg-4">
                <!-- TODO: userdata = effect-value="05/31/2022" -->
                <!-- TODO: Style input label -->
                <BaseDateInput
                  id="paydayLoan"
                  data-test-id="payday-loan"
                  name="payday-loan-date"
                  :label="data[5]?.fields?.label"
                />
              </div>
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  class="theme-total"
                  data-test-id="test1"
                  :label="data[3]?.fields?.label"
                  value="test value"
                />
              </div>
            </div>

            <h4>{{ data[10]?.fields?.label }}</h4>
            <p>{{ data[11]?.fields?.label }}</p>
            <NuxtLink
              class="theme-draw-amount-link"
              aria-controls="termsModal"
              :data-test-id="`modal-link`"
              data-bs-target="#termsModal"
              data-bs-toggle="offcanvas"
            >
              {{ data[12]?.fields?.label }}
            </NuxtLink>
          </BaseAccordion>
        </div>
      </div>
    </BaseCard>
  </BaseSkeletonLoader>
  <WidgetsModalTransparentJustMoment />
  <WidgetsModalTermsAndConditions />
</template>
