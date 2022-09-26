<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
const { getCtaData } = useContentful();
const { mapCtaRoutes } = useCtaRoute();
const { data, pending } = getCtaData('widget-cta-account-details');
const accountDetailsMenuContent = reactive({
  menuItems: [],
});

watchEffect(() => {
  if (data?.value?.ctaList) {
    accountDetailsMenuContent.menuItems = data?.value?.ctaList.map((cta) => ({
      ...cta,
      route: mapCtaRoutes(cta?.label),
    }));
  }
});
</script>

<template>
  <nav aria-label="menuNavigationItems">
    <ul class="theme-account-details-menu-list">
      <li
        v-for="cta in accountDetailsMenuContent?.menuItems || [1, 2, 3, 4]"
        :key="cta?.label || cta"
      >
        <NuxtLink :to="cta?.route">
          <BaseKeyValueText
            :data-test-id="`testId-${cta?.route || cta}`"
            :is-loading="pending"
            :label="cta?.label"
            text-direction="row"
            type="icon"
          >
            <template #value>
              <BaseIcon
                :color="Colors.Black"
                :name="IconNames.ArrowRight"
                :size="IconSizes.Medium"
              />
            </template>
          </BaseKeyValueText>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
