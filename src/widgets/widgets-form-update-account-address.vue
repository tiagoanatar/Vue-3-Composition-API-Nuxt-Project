<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { TypesService } from '@/constants/zipcode';
import { getFullAddressObject } from '@/utils/map';
import { usePersonalAddressSchema } from '@/composables/schemas/useSchemas';

const id = 'formUpdateAccountAddress';
const schema = usePersonalAddressSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-address');
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getZipcodeValidation, putPersonalDataAddress, getPersonalInfo } =
  useComposite();

const placeData = ref(null);
const showNoServiceableModal = ref(false);

const addressData = ref({
  pending: true,
  data: {},
});

const autocomplete = ref('');

async function handleSubmit(data) {
  let payload = {};
  let PostalCode = '';

  if (Object.keys(addressData?.value?.data?.service || {}).length !== 0) {
    const { service } = addressData?.value?.data || {};
    PostalCode = service?.zipCode;
    payload = { ...data, ...service };
  } else {
    const addressObject = getFullAddressObject(placeData?.value || {});
    PostalCode = addressObject?.PostalCode || '';

    const {
      StreetNumber = '',
      StreetName = '',
      City = '',
      StateCode = '',
    } = addressObject || {};

    payload = {
      ...data,
      address1: `${StreetNumber || ''} ${StreetName || ''}`,
      city: City,
      stateCode: StateCode,
      zipCode: PostalCode,
    };
  }

  showNoServiceableModal.value = !PostalCode;
  setLoadingState(!!PostalCode);

  if (PostalCode) {
    const validZipcode = await getZipcodeValidation(PostalCode);
    const { channel = '' } = validZipcode || {};

    if ([TypesService.BOTH, TypesService.ONLINE].includes(channel)) {
      const saveData = await putPersonalDataAddress(Routes.AccountDetails);
      saveData(payload);
    } else {
      showNoServiceableModal.value = true;
    }

    setLoadingState(false);
  }
}

function handlePlace(place) {
  placeData.value = place;
  autocomplete.value = '';

  if (Object.keys(place).length !== 0) {
    const {
      PostalCode = '',
      StreetNumber = '',
      StreetName = '',
      City = '',
      StateCode = '',
    } = getFullAddressObject(place || {});

    autocomplete.value = JSON.stringify({
      address1: `${StreetNumber || ''} ${StreetName || ''}`,
      city: City,
      stateCode: StateCode,
      zipCode: PostalCode,
    });
  }

  if (addressData?.value?.data?.service) {
    addressData.value.data.prefilledAddress = false;
    addressData.value.data.service = {};
  }
}

onMounted(async () => {
  setLoadingState(true);
  const data = await getPersonalInfo();
  const homeAddress = data?.homeAddress;
  addressData.value.pending = false;

  if (homeAddress?.address1) {
    addressData.value.data = {
      address: `${homeAddress?.address1}, ${homeAddress?.city}, ${homeAddress?.stateCode}`,
      address2: homeAddress?.address2 || '',
      prefilledAddress: true,
      service: {
        address1: homeAddress?.address1,
        city: homeAddress?.city,
        stateCode: homeAddress?.stateCode,
        zipCode: homeAddress?.zipCode,
      },
    };
  }
  setLoadingState(false);
});
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="
      schema(
        !!placeData?.address_components || addressData?.data?.prefilledAddress
      )
    "
    :submit="handleSubmit"
    hide-submit
  >
    <ClientOnly>
      <BaseInputAutoComplete
        id="address1"
        :data-test-id="id"
        :label="data?.address1"
        :effect-value="addressData?.data?.address || ''"
        :is-disabled="getFormLoadingState || addressData?.pending"
        :options="{
          componentRestrictions: { country: 'us' },
          strictBounds: true,
        }"
        name="address1"
        @handle-place="handlePlace"
      />
      <input type="hidden" name="autocomplete" :value="autocomplete" />
    </ClientOnly>
    <BaseInput
      id="address2"
      :data-test-id="id"
      :is-loading="pending"
      :label="data?.address2"
      :effect-value="addressData?.data?.address2 || ''"
      :is-disabled="getFormLoadingState || addressData?.pending"
      name="address2"
      optional-text="optional"
    />
    <WidgetsModalNotServiceable
      :show-modal="showNoServiceableModal"
      @handle-hide="showNoServiceableModal = false"
    />
  </BaseForm>
</template>
