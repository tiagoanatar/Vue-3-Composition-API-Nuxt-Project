<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { TypesService } from '../constants/zipcode';
import { getFullAddressObject } from '@/utils/map';
import { isJsonString } from '@/utils/isJsonString';
import { usePersonalAddressSchema } from '@/composables/schemas/useSchemas';

const id = 'formPersonalAddress';
const schema = usePersonalAddressSchema();
const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-personal-address');
const { getFormLoadingState, setLoadingState } = useFormValidState();
const { getZipcodeValidation, putPersonalDataAddress, getPersonalInfo } =
  useComposite();
const { getDefaultData, removeSaveAndExitData } = useDefaultData();

enum StatesCode {
  FL = 'FL',
  MI = 'MI',
}

const placeData = ref(null);
const showModal = ref(false);

const addressData = ref({
  pending: true,
  data: {},
});

const autocomplete = ref('');
/*
NOTE: When the user selects an address from Google Autocomplete (by pressing Enter),
the submit action is executed first
(it is necessary to have a valid address and its zipcode at this point),
to avoid this it is validated that the user has already
selected an address in the Google Autocomplate.

Possible problem:

If the address does not exist or is not selected in the Google autocomplete,
the user will not be able to continue to the next step.
*/
async function handleSubmit(data) {
  let payload = {};
  let PostalCode = '';

  if (Object.keys(addressData?.value?.data?.service || {}).length !== 0) {
    const { service } = addressData.value.data || {};
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

  showModal.value = !PostalCode;
  setLoadingState(!!PostalCode);

  if (PostalCode) {
    const validZipcode = await getZipcodeValidation(PostalCode);
    const { channel = '' } = validZipcode || {};

    if ([TypesService.BOTH, TypesService.ONLINE].includes(channel)) {
      await removeSaveAndExitData();

      const router = [StatesCode.FL, StatesCode.MI].includes(payload?.stateCode)
        ? 'PersonalIdentity'
        : 'PersonalSsn';

      const saveData = await putPersonalDataAddress(Routes[router]);
      saveData(payload);
    } else {
      showModal.value = true;
    }

    setLoadingState(false);
  }
}

function handlePlace(place) {
  placeData.value = place;
  autocomplete.value = '';

  // If it is a valid address, the information is
  // saved in a hidden input to be sent to the save and exit service.
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
  const { userData: data, saveAndExitData } = await getDefaultData(
    getPersonalInfo
  );
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

    autocomplete.value = JSON.stringify(addressData.value.data.service);
  }

  if (Object.keys(saveAndExitData).length !== 0) {
    const autocompleteData = saveAndExitData?.autocomplete || '';

    const newAddressData = {
      address: saveAndExitData?.address1 || '',
      address2: saveAndExitData?.address2 || '',
      prefilledAddress: false,
      service: {},
    };

    // Address data is retrieved (if it was a valid address)
    if (autocompleteData !== '' && isJsonString(autocompleteData)) {
      newAddressData.prefilledAddress = true;
      newAddressData.service = JSON.parse(autocompleteData);
      autocomplete.value = autocompleteData;
    }

    addressData.value.data = newAddressData;
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
      :show-modal="showModal"
      @handle-hide="showModal = false"
    />
  </BaseForm>
</template>
