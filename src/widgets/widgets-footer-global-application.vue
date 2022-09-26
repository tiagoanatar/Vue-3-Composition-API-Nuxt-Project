<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { TPlaceHolder } from '@/constants/bootstrap';

const { getGlobalFooterData } = useContentful();
const { data, pending } = getGlobalFooterData('widget-footer-global-backup');

interface Props {
  class?: string;
  showFullFooter?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showFullFooter: false,
  class: '',
});

const content = reactive({
  helpLinkText: '',
  secureText: '',
  termsLinkText: '',
});

watchEffect(() => {
  content.helpLinkText = data?.value?.linkHelp;
  content.secureText = data?.value?.linkSecureArea;
  content.termsLinkText = data?.value?.linkTerms;
});

const footerPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];

const footerClass = computed(() => [
  `theme-global-application-footer d-flex align-items-center ${props.class}`,
  props.showFullFooter ? 'justify-content-between' : 'justify-content-center',
]);
</script>

<template>
  <footer>
    <!-- NOTE: Keeping one extra dive we have to follow single parent rule, otherwise it cause and issue to render html. -->
    <div :class="footerClass">
      <div class="d-flex">
        <BaseSkeletonLoader :is-loading="pending" :rows="footerPlaceHolder">
          <div class="theme-footer-lock-icon">
            <BaseIcon
              :color="Colors.Black"
              :name="IconNames.Lock"
              :size="IconSizes.Small"
            />
          </div>
          <p class="pf-footer-text" data-testid="global-footer-secure-text">
            {{ content?.secureText || '' }}
          </p>
        </BaseSkeletonLoader>
      </div>
      <template v-if="showFullFooter">
        <BaseSkeletonLoader :is-loading="pending" :rows="footerPlaceHolder">
          <button
            aria-controls="termsModal"
            class="btn theme-btn-modal-link"
            data-bs-target="#termsModal"
            data-bs-toggle="offcanvas"
            data-testid="terms-and-privacy-footer-cta"
            type="button"
          >
            {{ content?.termsLinkText || '' }}
          </button>
        </BaseSkeletonLoader>
      </template>
    </div>
    <!-- NOTE: In WidgetsModalTermsAndConditions adding same condition, 
    because, if keeping this widget inside above template it's rendering blank span for friction of second
    which is creating layout problem for links' loading skelton. -->
    <template v-if="showFullFooter">
      <WidgetsModalTermsAndConditions />
    </template>
  </footer>
</template>
