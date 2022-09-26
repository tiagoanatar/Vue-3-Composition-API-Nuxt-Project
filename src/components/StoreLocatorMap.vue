<script setup lang="ts">
import { ICoordinate, IStoreList } from '@/utils/stores';
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
const { getPreviousRoute } = useBackRedirection();

interface Props {
  center?: ICoordinate;
  isLoading?: boolean;
  noFound?: ICoordinate;
  storeList: Array<IStoreList>;
}

withDefaults(defineProps<Props>(), {
  center: () => ({}),
  isLoading: false,
  noFound: () => ({}),
  storeList: () => [],
});

const radius = Math.sqrt(1899160) * 100;
const circleOptions = ref({
  strokeColor: Colors.AALightBlue,
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: 'rgba(39, 170, 225, 0.3)',
  fillOpacity: 1,
});
const content = {
  backCtaLabel: 'Back',
};
</script>

<template>
  <div class="theme-store-locator-map">
    <NuxtLink
      :to="getPreviousRoute()"
      :aria-label="content?.backCtaLabel"
      data-test-id="theme-store-locator-map-back-icon"
    >
      <BaseIcon
        :color="Colors.AADarkBlue"
        :name="IconNames.ArrowLeft"
        :size="IconSizes.Medium"
        class="theme-store-locator-map-back"
      />
    </NuxtLink>

    <GMapMap
      :center="center"
      :zoom="noFound ? 7 : 10"
      map-type-id="roadmap"
      :options="{ disableDefaultUI: true }"
    >
      <template v-for="(store, index) in storeList" :key="index">
        <GMapMarker
          v-if="Object.keys(store?.coordinate).length !== 0"
          :position="store?.coordinate"
        />
      </template>
      <GMapCircle
        v-if="noFound && !isLoading"
        :options="circleOptions"
        :radius="radius"
        :center="noFound"
      />
    </GMapMap>
  </div>
</template>
