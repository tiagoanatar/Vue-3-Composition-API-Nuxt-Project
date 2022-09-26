<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';
import { getWithDashLowercaseString } from '@/utils/strings';
const { getApplicationFooterData } = useContentful();
const { data, pending } = getApplicationFooterData(
  'widgets-application-footer'
);

const dataTestId = 'dashboard-footer';

const socialIcons = {
  Facebook: {
    name: IconNames.FaceBook,
  },
  Twitter: {
    name: IconNames.Twitter,
  },
  Instagram: {
    name: IconNames.Instagram,
  },
  'You Tube': {
    name: IconNames.YouTube,
  },
  Pinterest: {
    name: IconNames.Pinterest,
  },
};
</script>
<template>
  <footer class="theme-global-footer-dashboard" :data-test-id="dataTestId">
    <div class="container">
      <div class="row">
        <div
          v-for="(footerWidget, index) in data?.footerList || [1, 2]"
          :key="index"
          class="col-6 col-md-3 theme-global-footer-dashboard-link-widget"
          :class="{ 'offset-md-1': index === 1 }"
        >
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 8 }]">
            <h5>{{ footerWidget?.title || '' }}</h5>
          </BaseSkeletonLoader>
          <div class="row">
            <!-- TODO: In footerLinks one cta is a `Apply Now`, which needs to show/hide dynamically later on -->
            <div
              v-for="(links, newIndex) in footerWidget?.footerLinks || [
                1, 2, 3, 4, 5, 6,
              ]"
              :key="newIndex"
              class="col-12 col-md-6"
            >
              <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 6 }]">
                <ul class="nav flex-column">
                  <li v-for="link in links" :key="link.label">
                    <NuxtLink
                      class="footer-link widget-item-link"
                      :to="link?.route"
                      :data-testid="`${dataTestId}-${getWithDashLowercaseString(
                        link?.label || ''
                      )}-link`"
                      >{{ link?.label || '' }}</NuxtLink
                    >
                  </li>
                </ul>
              </BaseSkeletonLoader>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 order-2 order-md-1 d-flex align-items-center theme-global-footer-dashboard-privacy-links"
        >
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10 }]">
            <button
              aria-controls="termsModal"
              class="btn theme-btn-modal-link"
              data-bs-target="#termsModal"
              data-bs-toggle="offcanvas"
              data-testid="terms-and-privacy-footer-cta"
              type="button"
            >
              {{ data?.privacyLinks[0] || '' }}
            </button>
          </BaseSkeletonLoader>
          <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 10 }]">
            <!-- TODO: Handle redirection -->
            <NuxtLink
              to="/dashboard"
              class="footer-link"
              data-testid="cookie-and-advertising-footer-link"
            >
              {{ data?.privacyLinks[1] || '' }}
            </NuxtLink>
          </BaseSkeletonLoader>
        </div>
        <div class="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-start justify-content-md-end theme-global-footer-dashboard-social-links"
        >
          <ul class="nav">
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 12 }]">
              <li
                v-for="(link, index) in data?.socialLinks || [1, 2, 3, 4, 5]"
                :key="`social-link-${index}`"
              >
                <!-- TODO: Handle redirection route once links are available -->
                <NuxtLink
                  :data-testid="`${dataTestId}-${getWithDashLowercaseString(
                    link?.fields?.label || ''
                  )}-social-link`"
                  to="/dashboard"
                  class="theme-global-footer-dashboard-item"
                >
                  <BaseIcon
                    :name="socialIcons[link?.fields?.label]?.name"
                    :color="Colors.White"
                  />
                </NuxtLink>
              </li>
            </BaseSkeletonLoader>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="theme-global-footer-dashboard-copyright-details">
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 1 }]">
              <img :src="data?.icon" alt="State License" />
            </BaseSkeletonLoader>
            <BaseSkeletonLoader :is-loading="pending" :rows="[{ col: 4 }]">
              <p>
                {{ data?.copyRight || '' }}
              </p>
            </BaseSkeletonLoader>
          </div>
        </div>
      </div>
    </div>
    <WidgetsModalTermsAndConditions />
  </footer>
</template>
