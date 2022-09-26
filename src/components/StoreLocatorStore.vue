<script setup lang="ts">
import { Colors } from '@/constants/colors';
import {
  IAddress,
  IBrand,
  ICoordinate,
  ILocationHours,
  valideListDays,
  valideOpenNow,
} from '@/utils/stores';
import { IconNames, IconSizes } from '@/constants/icons';
import { Pages } from '@/constants/pages';

interface Props {
  address?: IAddress;
  brand?: IBrand;
  coordinate?: ICoordinate;
  distance?: number;
  isLoading?: boolean;
  locationHours?: Array<ILocationHours>;
  locationId?: string;
  phone?: string;
  vicinity?: string;
}

const props = withDefaults(defineProps<Props>(), {
  address: () => ({}),
  brand: () => ({}),
  coordinate: () => ({}),
  distance: 0,
  isLoading: false,
  locationHours: () => [],
  locationId: '',
  phone: '',
  vicinity: '',
});

const showDetails = ref(false);
const cxOpenNow = computed(() =>
  valideOpenNow(props?.locationHours) ? 'Open Now' : 'Closed'
);
const cxListDays = computed(() => valideListDays(props?.locationHours));
const description = computed(
  () => `${props?.brand?.description || ''} #${props?.locationId || ''}`
);

const address = computed(() => {
  const addressdata = [
    props?.address?.addressLine1,
    props?.address?.city,
    props?.address?.zipCode,
  ];
  return addressdata.filter((v) => v).join(', ');
});

const hanldeDirection = () => {
  const addressdata = [
    props?.address?.addressLine1,
    props?.address?.city,
    props?.address?.zipCode,
  ];

  const params = [props?.brand?.description, ...addressdata]
    .filter((v) => v)
    .map((v) => v.split(' ').join('+'))
    .join(',');

  const url = `https://www.google.com/maps/dir/current+location/${params}`;
  window.open(url);
};

watch(
  () => {
    props.isLoading;
  },
  async () => {
    if (props.isLoading) {
      showDetails.value = false;
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="theme-stores-list-store">
    <div class="theme-stores-list-header">
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <p class="theme-stores-list-header-description">
          {{ description }}
        </p>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <p class="theme-stores-list-header-open">{{ cxOpenNow }}</p>
      </BaseSkeletonLoader>
    </div>
    <div class="theme-stores-list-address">
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <p class="theme-stores-list-address-value">{{ address }}</p>
      </BaseSkeletonLoader>
      <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 12 }]">
        <p class="theme-stores-list-address-distance">
          {{ Math.round(distance) }} mi.
        </p>
      </BaseSkeletonLoader>
    </div>
    <div class="theme-stores-list-details">
      <p class="theme-stores-list-details-label">Store Details</p>
      <button
        class="btn"
        :disabled="isLoading"
        :class="{ show: showDetails }"
        :aria-label="showDetails ? 'Hide Details' : 'Show Details'"
        :data-testid="`${Pages.StoreLocator}-${locationId}-show-details`"
        @click="showDetails = !showDetails"
      >
        <BaseIcon
          :color="Colors.Black"
          :name="IconNames.ChevronDown"
          :size="IconSizes.Medium"
        />
      </button>
    </div>
    <div v-if="showDetails" class="theme-stores-list-info">
      <div class="theme-stores-list-info-header">
        <p class="theme-stores-list-info-header-hours">Store Hours</p>
        <p>{{ cxOpenNow }}</p>
      </div>
      <div class="theme-stores-list-info-days">
        <ul>
          <li v-for="({ day, hour }, index) in cxListDays" :key="index">
            <p>{{ day }}</p>
            <p>{{ hour }}</p>
          </li>
        </ul>
      </div>
      <div class="theme-stores-list-info-tel">
        <div>
          <span>Store Number</span>
          <a :href="`tel:${props?.phone}`">{{ phone }}</a>
        </div>
        <BaseButton
          :data-test-id="`${Pages.StoreLocator}-${locationId}`"
          label="Directions"
          size="sm"
          variation="outline-primary"
          :aria-label="`Directions - ${description}`"
          @click="hanldeDirection"
        />
      </div>
    </div>
  </div>
</template>
