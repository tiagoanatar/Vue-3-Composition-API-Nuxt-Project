<script setup lang="ts">
// TODO: Add form validation
// TODO: Create desktop style
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';
import { temp } from '@/__mocks__/loan-origination-data';
import { useSignatureSchema } from '@/composables/schemas/useSchemas';
const id = 'loan-origination-summary';

const schema = useSignatureSchema();
const { getSummaryData } = useContentful();
const { data, pending } = getSummaryData('widget-summary-loan-origination');
const { getFormValidState } = useFormValidState();

// TODO: This object will be used to store real services data
const userData = reactive({
  pending: true,
  data: {},
  bankInfo: {},
});

// TODO: Add proper submit services
// TODO: Add routes to the proper constant file
function handleSubmit(data) {
  navigateTo('/loan-origination/installment-loan/success-message');
}
</script>

<template>
  <div class="theme-loan-origination-summary">
    <div class="row">
      <h2 class="theme-loan-origination-summary-headline col">
        <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 3 }]">
          {{ data?.headline }}
        </BaseSkeletonLoader>
      </h2>
    </div>
    <div class="row">
      <div class="theme-loan-origination-summary-data col-md-6">
        <div class="theme-loan-origination-summary-card">
          <div class="theme-loan-origination-summary-card-header">
            <dl>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
                  {{ data?.labelOrderSummary }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
                  {{ data?.labelInstallmentLoan }}
                  {{ temp?.labelInstallmentLoan }}
                </BaseSkeletonLoader>
              </dd>
            </dl>
          </div>

          <div class="theme-loan-origination-summary-card-body theme-loan-origination-summary-pair-items"
          >
            <dl>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelLoanAmount }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelLoanAmount }}
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelInstallmentAmount }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelInstallmentAmount }}
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelPaymentDate }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelPaymentDate }}
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelPaymentNumber }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelPaymentNumber }}
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelHowReceive }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelHowReceive }}
                </BaseSkeletonLoader>
              </dd>
            </dl>
          </div>

          <div class="theme-loan-origination-summary-card-final theme-loan-origination-summary-pair-items"
          >
            <dl>
              <dt class="theme-loan-origination-summary-pair-items-large">
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  <span>{{ data?.labelTotalRepayment }}</span>
                </BaseSkeletonLoader>
              </dt>
              <dd class="theme-loan-origination-summary-pair-items-large">
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  <span>{{ temp?.labelTotalRepayment }}</span>
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelApr }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelApr }}
                </BaseSkeletonLoader>
              </dd>
              <dt>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ data?.labelFinanceCharge }}
                </BaseSkeletonLoader>
              </dt>
              <dd>
                <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
                  {{ temp?.labelFinanceCharge }}
                </BaseSkeletonLoader>
              </dd>
            </dl>
          </div>
        </div>

        <div class="theme-loan-origination-summary-footer">
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
            <NuxtLink
              aria-controls="disclosure-privacy-policy"
              data-bs-target="#disclosure-privacy-policy"
              data-bs-toggle="offcanvas"
              :data-test-id="`${id}-link`"
            >
              {{ data?.labelViewLenderDisclosures }}
            </NuxtLink>
            <WidgetsModalDisclosurePrivacyPolicy />
          </BaseSkeletonLoader>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
            <span>
              <BaseIcon :color="Colors.AABlackBlue" :name="IconNames.Printer" />
              <BaseIcon
                :color="Colors.AABlackBlue"
                :name="IconNames.DownloadCloud"
              />
            </span>
          </BaseSkeletonLoader>
        </div>
      </div>

      <div class="col-md-6">
        <div class="theme-loan-origination-summary-form">
          <div class="theme-loan-origination-summary-input">
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
              <BaseForm
                :id="id"
                :data-test-id="`${id}-form`"
                :schema="schema"
                :submit="handleSubmit"
                hide-submit
              >
                <BaseInput
                  id="signature"
                  :data-test-id="`${id}-signature`"
                  :is-loading="pending"
                  :label="
                    data?.labelSignatureRequired + temp?.labelSignatureRequired
                  "
                  name="signature"
                />
              </BaseForm>
            </BaseSkeletonLoader>
          </div>

          <div class="theme-loan-origination-summary-input-agreement">
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
              {{ data?.agreement }}
            </BaseSkeletonLoader>
          </div>

          <div class="theme-loan-origination-summary-button">
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
              <BaseButton
                :data-test-id="`${id}-cta`"
                :label="data?.buttonCta"
                :is-disabled="!getFormValidState"
                @click="handleSubmit"
              />
            </BaseSkeletonLoader>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
