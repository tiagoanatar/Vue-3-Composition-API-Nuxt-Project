export const getAddressPartFunction =
  (addressObject) =>
  (type: string, key: 'long_name' | 'short_name' = 'long_name') => {
    const component = addressObject?.address_components?.find((part) =>
      part?.types?.includes(type)
    );

    if (component) {
      return component?.[key];
    }
    return null;
  };

export const getFullAddressObject = (addressObject) => {
  try {
    const getAddressPart = getAddressPartFunction(addressObject);
    const city =
      getAddressPart('locality') ||
      getAddressPart('sublocality_level_1') ||
      getAddressPart('sublocality');

    return {
      City: city,
      PostalCode: getAddressPart('postal_code'),
      County: getAddressPart('administrative_area_level_2'),
      State: getAddressPart('administrative_area_level_1'),
      StateCode: getAddressPart('administrative_area_level_1', 'short_name'),
      Country: getAddressPart('country'),
      CountryCode: getAddressPart('country', 'short_name'),
      StreetName: getAddressPart('route'),
      StreetNameShort: getAddressPart('route', 'short_name'),
      StreetNumber: getAddressPart('street_number'),
      Neighborhood: getAddressPart('neighborhood'),
      PostalCodeSuffix: getAddressPart('postal_code_suffix'),
    };
  } catch (error) {
    const { handleError } = useError();

    handleError(error, 'gmaps');
  }
};

/**
 * https://developers.google.com/maps/documentation/geocoding/overview
 * Using the geocoding function of google maps convert addresses to geographic coordinates.
 */
export const geocodingAddress = async (address = '') => {
  const env = useEnvironmentVariables();
  const { get } = await useAxios({ useAuth: false });
  const key = env.variables.value.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&address=${encodeURIComponent(
    address
  )}&key=${key}`;

  const response = await get(url, { context: 'gmaps' });

  if (response) {
    return response;
  }
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 * Get the current location of the user using the browser's "geolocation" api
 * @param callback
 */
export const getCurrentLocation = (callback) => {
  const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    callback({
      latitude,
      longitude,
    });
  };

  const handleEerror = () => {
    callback({
      error: 'Unable to retrieve your location',
    });
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleEerror);
  } else {
    callback({
      error: 'Geolocation is not supported by your browser',
    });
  }
};
