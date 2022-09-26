const { getStoresByCoordinates, getLocationByID } = useComposite();
import { geocodingAddress } from '@/utils/map';

export interface IAddress {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  zipCode?: string;
  addressType?: string;
}

export interface IBrand {
  brandCode?: string;
  brandName?: string;
  description?: string;
}

export interface ILocationHours {
  id?: string;
  openHour?: string;
  closeHour?: string;
}

export interface ICoordinate {
  lat?: number;
  lng?: number;
}

export interface IStoreList {
  locationId?: string;
  brand?: IBrand;
  address?: IAddress;
  vicinity?: string;
  phone?: string;
  distance?: number;
  coordinate?: ICoordinate;
  locationHours?: Array<ILocationHours>;
}

/**
 * Returns the list of nearby stores, depending on the geographical coordinates
 */
export const getStores = async (lat = 0, lng = 0) => {
  const stores = await getStoresByCoordinates(lat, lng);
  const totalStores = stores.length;

  if (totalStores !== 0) {
    // TODO: Remove once the search/by-coordinate service returns the list of hours of each store
    // Three requests are being made for each store with another service,
    // which can be bad for performance.
    const locationHours = stores.map((store) =>
      getLocationByID(store?.locationId)
    );

    // TODO: Remove once the service returns the geographical coordinates of each store.
    // At this moment the geocoding function of Google maps is used,
    // geocoding is a feature that has a monetary cost
    // https://developers.google.com/maps/documentation/geocoding/usage-and-billing
    // In addition, three additional requests are being made
    const geocoding = stores.map((store) => {
      const addressLine1 = store?.address?.addressLine1 || '';
      const city = store?.address?.city || '';
      const county = store?.address?.county || '';
      const zipCode = store?.address?.zipCode || '';

      const address = [addressLine1, city, county, zipCode]
        .filter((v) => v)
        .join(', ');

      return geocodingAddress(address);
    });

    // TODO: Remove once the service returns the list of hours and the
    // geographical coordinates of each store, at this moment 6 additional
    // requests are being made, which is not good for performance.
    const results = await Promise.all([...locationHours, ...geocoding]);

    for (let i = 0; i < stores.length; i++) {
      stores[i].locationHours = results?.[i]?.locationHours || [];
      stores[i].coordinate =
        results?.[i + totalStores]?.results?.[0]?.geometry?.location || {};
    }
  }

  return stores;
};

/**
 * Depending on the day and hours, it indicates whether a store is open or closed.
 * NOTE: The comparison is made with the current time of the client (browser),
 * ideally this comparison could be carried out on the server
 */
export const valideOpenNow = (
  locationHours: Array<ILocationHours>
): boolean => {
  let isStoreOpen = false;
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const weekday = currentDate.toLocaleString('en-us', { weekday: 'long' });
  const hours =
    locationHours.filter(
      (location) => location?.id?.toLowerCase() === weekday.toLowerCase()
    )?.[0] || {};

  const { openHour = '00:00', closeHour = '00:00' } = hours;
  const openHourNumber = Number.parseInt(openHour?.split(':')?.[0] || '0');
  const closeHourNumber = Number.parseInt(closeHour?.split(':')?.[0] || '0');

  if (openHourNumber && closeHourNumber) {
    isStoreOpen =
      currentHour >= openHourNumber && currentHour <= closeHourNumber;
  }

  return isStoreOpen;
};

/**
 * Groups the list of hours to show in the UI
 */
export const valideListDays = (locationHours: Array<ILocationHours>) => {
  const listDays = [];
  let firstDay = '';
  let lastDay = '';
  let initialHour = '';
  let previusHour = '';

  const getTime = (hour: number) => (hour <= 12 ? hour : hour - 12);
  const getTimeOfDay = (hour: number) => (hour < 12 ? 'am' : 'pm');

  for (let i = 0; i < locationHours.length; i++) {
    const {
      id: dayName,
      openHour = '00:00',
      closeHour = '00:00',
    } = locationHours[i];
    const openHourNumber = Number.parseInt(openHour?.split(':')?.[0] || '0');
    const closeHourNumber = Number.parseInt(closeHour?.split(':')?.[0] || '0');

    previusHour = initialHour;

    if (openHourNumber && closeHourNumber) {
      initialHour = [openHourNumber, closeHourNumber]
        .map((time) => {
          return `${getTime(time)}:00${getTimeOfDay(time)}`;
        })
        .join(' - ');
    } else {
      initialHour = 'Closed';
    }

    if (i !== 0) {
      if (initialHour !== previusHour) {
        const day = lastDay === '' ? firstDay : `${firstDay} - ${lastDay}`;
        const hour = previusHour;

        listDays.push({ day, hour });
        firstDay = dayName;
        lastDay = '';

        // It is the last day of the list
        if (i === locationHours.length - 1) {
          listDays.push({
            day: dayName,
            hour: initialHour,
          });
        }
      } else {
        lastDay = dayName;

        if (i === locationHours.length - 1) {
          listDays.push({
            day: `${firstDay} - ${lastDay}`,
            hour: initialHour,
          });
        }
      }
    } else {
      firstDay = dayName;
    }
  }

  return listDays;
};
