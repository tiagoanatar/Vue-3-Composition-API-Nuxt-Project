<script setup lang="ts">
import { Pages, Routes } from '@/constants/pages';
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

const WIDGET_NAME = 'complete-application-card';
const link = ref('');
const showWidget = ref(false);

const card = reactive({
  pending: true,
  data: {
    backgroundSrc: '',
    logoAlt: '',
    logoSrc: '',
    cardHeader: '',
    title: '',
    description: '',
  },
});

onMounted(async () => {
  const { getDescriptionData } = useContentful();
  const { getApplicationData } = useComposite();
  const { lastApplicationPage } = await getApplicationData();
  const { getPersonalInfo } = useComposite();
  const { firstName } = await getPersonalInfo();

  const page = lastApplicationPage?.page || '';
  const query = lastApplicationPage?.query || '';
  const route =
    (Routes[page] || Routes.PersonalInformation) + (query ? `?${query}` : '');

  const getCardType = route ? 'incomplete' : 'start';

  const { data } = getDescriptionData(
    `widget-description-application-${getCardType}`
  );

  link.value = route || Routes.PersonalInformation;

  // NOTE: Validation against first name since it can't exist on the response without all personal information.
  showWidget.value = Boolean(page || !firstName);

  card.data = data;
  card.pending = false;
});
</script>

<template>
  <section v-if="showWidget" class="theme-complete-application">
    <BaseCard :data-test-id="`${Pages.Dashboard}-${WIDGET_NAME}`" is-base-card>
      <div class="theme-complete-application-top">
        <div
          class="theme-complete-application-icon"
          :style="{ backgroundImage: `url(${card?.data?.backgroundSrc})` }"
        />
        <div class="theme-complete-application-logo">
          <img :alt="card?.data?.logoAlt" :src="card?.data?.logoSrc" />
        </div>

        <BaseSkeletonLoader
          :is-loading="card?.pending"
          :rows="[
            { col: 8, size: 'lg' },
            { col: 6, size: 'lg' },
          ]"
        >
          <h2 class="theme-complete-application-heading">
            {{ card?.data?.cardHeader }}
          </h2>
        </BaseSkeletonLoader>
      </div>
      <div class="theme-complete-application-cta">
        <NuxtLink
          :to="link"
          :data-testid="`${WIDGET_NAME}-link`"
          class="theme-complete-application-link"
        >
          <BaseIcon :name="IconNames.ArrowRight" :color="Colors.White" />
        </NuxtLink>
      </div>
      <div class="theme-complete-application-bottom">
        <BaseSkeletonLoader
          :is-loading="card?.pending"
          :rows="[{ col: 8, size: 'lg' }]"
        >
          <h3 class="theme-complete-application-bottom-title">
            {{ card?.data?.title }}
          </h3>
        </BaseSkeletonLoader>
        <BaseSkeletonLoader
          :is-loading="card?.pending"
          :rows="[
            { col: 6, size: 'lg' },
            { col: 10, size: 'lg' },
            { col: 4, size: 'lg' },
          ]"
        >
          <p>{{ card?.data?.description }}</p>
        </BaseSkeletonLoader>
      </div>
    </BaseCard>
  </section>
</template>
