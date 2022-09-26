<script setup lang="ts">
const { getIncomeInfo, getBankInfo } = useComposite();
const { getSummaryData } = useContentful();
const { data, pending } = getSummaryData('widget-review-financial-review');

const userData = reactive({
  pending: true,
  data: {},
  bankInfo: {},
});

// Sets composite api data validation state
const { setCompositeValidState } = useCompositeValidState();

function editSummaryItem() {
  // TODO: Add the functionality to edit the income summary
}

function getDeleteIncomeId(id) {
  setCompositeValidState(id);
}

onMounted(async () => {
  const data = await getIncomeInfo();
  const bank = await getBankInfo();
  userData.pending = false;
  userData.data = data;
  userData.bankInfo = bank;
});
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <div
      v-for="(item, index) in pending || userData.pending
        ? 1
        : userData.data?.incomeSources"
      :key="index"
      class="theme-summary-card"
    >
      <BlockRow class="theme-summary-card-header">
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          <p>{{ data?.incomeLabels[index] }}</p>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
          <button class="btn btn-link" @click="editSummaryItem">
            {{ data?.editCta }}
          </button>
        </BaseSkeletonLoader>
      </BlockRow>
      <dl>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelJobStatus }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ item.employmentType }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelEmployerInfo }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ item.employerName }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ data?.labelIncomeInformation }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ item.payPerCheck }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 2 }]">
            {{ data?.labelPaymentType }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{
              item.directDeposit
                ? data?.labelPaymentTypeYes
                : data?.labelPaymentTypeNo
            }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 1 }]">
            {{ data?.labelDateLastCheck }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ item.firstPayDate }}
          </BaseSkeletonLoader>
        </dd>
        <dt>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
            {{ data?.labelDateNextCheck }}
          </BaseSkeletonLoader>
        </dt>
        <dd>
          <BaseSkeletonLoader
            :is-loading="userData.pending"
            :rows="[{ col: 2 }]"
          >
            {{ item.secondPayDate }}
          </BaseSkeletonLoader>
        </dd>
      </dl>
      <BaseSkeletonLoader
        :is-loading="pending || userData.pending"
        :rows="[{ col: 6 }]"
      >
        <button
          v-if="userData.data.incomeSources?.length > 1"
          class="btn btn-link theme-summary-card-delete-link"
          aria-controls="delete-income"
          data-bs-target="#delete-income"
          data-bs-toggle="modal"
          @click="getDeleteIncomeId(item.incomeId)"
        >
          {{ data?.labelDeleteIncome }}
        </button>
      </BaseSkeletonLoader>
    </div>
    <WidgetsModalManageEmploymentDeleteIncomeSummary />
    <BaseSkeletonLoader
      :is-loading="pending || userData.pending"
      :rows="[{ col: 6 }]"
    >
      <div
        v-if="userData.data.incomeSources?.length < 3"
        class="theme-add-income-summary"
      >
        <!-- TODO: Handle the redirect functionality for this -->
        <NuxtLink to="#">
          {{ data?.labelAddSourceIncome }}
        </NuxtLink>
      </div>
    </BaseSkeletonLoader>
  </div>
</template>
