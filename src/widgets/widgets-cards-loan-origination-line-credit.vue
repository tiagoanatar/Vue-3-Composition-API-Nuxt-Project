<script setup lang="ts">
const { getLoanOriginationSummaryCardData } = useContentful();
const { data, pending } = getLoanOriginationSummaryCardData(
  'widget-card-loan-origination-line-of-credit'
);
const router = useRouter();

const accordionData = reactive({
  dataTestId: `credit-line`,
  id: 'testIdCL',
  items: [
    {
      heading: 'Customize loan details',
      id: 'lineCredit',
    },
  ],
});

// TODO: Temporary redirect function. Will be replaced when services are in place.
function redirect() {
  setTimeout(
    () =>
      router.push(
        '/loan-origination/line-of-credit/new-customer-with-withdraw/loan-repay'
      ),
    3000
  );
}

watch(data, () => {
  accordionData.items[0].heading = data?.value[7]?.fields?.label;
});
</script>
<template>
  <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12, size: 'lg' }]">
    <BaseCard data-test-id="credit-line">
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
                  :label="data[9]?.fields?.label"
                  value="test value"
                />
              </div>
              <div class="col-12 col-lg-8">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[10]?.fields?.label"
                  value="test value"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[11]?.fields?.label"
                  value="test value"
                />
              </div>
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  data-test-id="test1"
                  :label="data[12]?.fields?.label"
                  value="test value"
                />
              </div>
              <div class="col-12 col-lg-4">
                <BaseKeyValueText
                  :is-loading="pending"
                  class="theme-total"
                  data-test-id="test1"
                  :label="data[13].fields?.label"
                  value="test value"
                />
              </div>
            </div>

            <h4>{{ data[14]?.fields?.label }}</h4>
            <p>{{ data[15]?.fields?.label }}</p>
            <NuxtLink
              class="theme-draw-amount-link"
              aria-controls="termsModal"
              :data-test-id="`modal-link`"
              data-bs-target="#termsModal"
              data-bs-toggle="offcanvas"
            >
              {{ data[16]?.fields?.label }}
            </NuxtLink>
          </BaseAccordion>
        </div>
      </div>
    </BaseCard>
  </BaseSkeletonLoader>
  <WidgetsModalTransparentJustMoment />
  <WidgetsModalTermsAndConditions />
</template>
