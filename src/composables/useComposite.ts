import { Contentful } from '@/types/contentful';
import { Routes } from '@/constants/pages';
import { isJsonString } from '@/utils/isJsonString';
import axios from 'axios';

export default () => {
  async function getApplicationData() {
    const { get } = await useAxios();

    const url = `v1/application-composite-ms/application/?latest=true&rnd=${Math.random()}`;
    let applicationList = [];
    let applicationId = '';
    let lastApplicationPage: { page: string; query?: string; data?: unknown } =
      {
        page: '',
        query: '',
        data: {},
      };

    const response = await get(url, { context: 'application-data' });

    applicationList = response?.data?.applicationList || [];
    applicationId = applicationList?.[0]?.applicationId || '';

    const applicationPage: string =
      applicationList?.[0]?.lastApplicationPage || '';

    if (applicationPage !== '' && isJsonString(applicationPage)) {
      lastApplicationPage = JSON.parse(applicationPage);
    }

    return {
      applicationId,
      applicationList,
      lastApplicationPage,
    };
  }

  async function postApplication(payload) {
    const { post } = await useAxios();
    const url = 'v1/application-composite-ms/application/';
    const response = await post(url, payload);

    if (response) {
      return response;
    }
  }

  async function putApplication(applicationId: string, payload) {
    const { put } = await useAxios();
    const url = `v1/application-composite-ms/application/${applicationId}`;
    const response = await put(url, payload);

    if (response) {
      return response;
    }
  }

  async function getContentful(url: string) {
    const env = useEnvironmentVariables();
    const { get } = await useAxios({ useAuth: false });
    const endpointUrl = env.variables.value.CONTENTFUL_ENDPOINT + url;

    const response: Partial<Contentful> = await get(endpointUrl, {
      context: 'contentful',
    });

    if (response) {
      return response;
    }
  }

  async function getPersonalInfo() {
    const { get } = await useAxios();

    // NOTE: The query parameter is added to bypass browser cache.
    const url = `v1/personal-composite-ms/applicant/personal-data?rnd=${Math.random()}`;

    const response = await get(url);

    if (response) {
      const { homeAddress, identity, personal } = response || {};
      const address1 = [
        homeAddress?.address1,
        homeAddress?.address2,
        homeAddress?.city,
      ]
        .filter((v) => v)
        .join(', ');

      const address2 = [homeAddress?.stateCode, homeAddress?.zipCode]
        .filter((v) => v)
        .join(' ');

      const address = (address1 ? `${address1}, ` : '') + address2;

      return {
        homeAddress,
        personal,
        address,
        currentPhone: personal?.currentPhone,
        dateOfBirth: personal?.dateOfBirth,
        email: identity?.email,
        firstName: personal?.firstName,
        lastName: personal?.lastName,
        ssn: personal?.ssn,
        smsOptin: personal?.smsOptin,
      };
    }
  }

  async function getFinancialBankName(routingNumber: string) {
    const { get } = await useAxios();

    const url = 'v1/bank-composite-ms/applicant/financial-data/routing-number/';

    const response = await get(`${url}${routingNumber}`, {
      context: 'financial',
    });

    return response?.bankName || '';
  }

  async function postBankInfo(payload) {
    const { post } = await useAxios();
    const url = 'v1/bank-composite-ms/applicant/financial-data/bank-info';

    const data = {
      routingNumber: payload.routingNumber,
      checkingAccNumber: payload.checkingAccNumber,
    };

    const response = await post(url, data);

    if (response) {
      return response;
    }
  }

  async function getBankInfo() {
    const { get } = await useAxios();

    const url = 'v1/bank-composite-ms/applicant/financial-data/bank-info';

    const response = await get(url, { context: 'financial' });

    if (response) {
      const incomeSources = response?.bankData || {};

      return {
        incomeSources,
      };
    }
  }

  async function putIncomeInfo(data, id) {
    const { put } = await useAxios();

    const url = `v1/income-composite-ms/applicant/financial-data/income/${id}`;

    const response = await put(url, data);

    if (response) {
      return response;
    }
  }

  async function postIncomeInfo(data) {
    const { post } = await useAxios();

    const url = `v1/income-composite-ms/applicant/financial-data/income`;

    const newId = await post(url, data).then((res) => {
      return res?.data?.incomeId;
    });

    return newId;
  }

  async function getIncomeInfo() {
    const { get } = await useAxios();
    const url = 'v1/income-composite-ms/applicant/financial-data/income';

    const response = await get(url, { context: 'financial' });

    if (response) {
      const incomeSources = response?.data || {};
      return {
        incomeSources,
      };
    }
  }

  async function deleteIncomeInfo(id) {
    const { deleteItem } = await useAxios();

    const url = `v1/income-composite-ms/applicant/financial-data/income/${id}`;

    await deleteItem(url);

    window.location.reload();
  }

  async function putPersonalData(to: Routes | false) {
    const { put } = await useAxios();
    const router = useRouter();
    const url = 'v1/personal-composite-ms/applicant/personal-data';

    return (payload) => {
      put(url, payload).then((response) => {
        if (response && to) {
          return router.push(to);
        }
      });
    };
  }

  const putPersonalDataAddress = async (to: Routes | false) => {
    const { put } = await useAxios();
    const router = useRouter();

    const url =
      'v1/applicant-address-composite-ms/applicant/personal-data/address';

    return (payload) =>
      put(url, payload).then((response) => {
        if (to && response) {
          router.push(to);
        }
      });
  };

  async function putPersonalSsn(to: Routes) {
    const { put } = await useAxios();
    const router = useRouter();
    const url = 'v1/personal-composite-ms/applicant/personal-data/ssn';

    return (payload) => {
      return put(url, payload).then((response) => {
        if (response) {
          return router.push(to);
        }
      });
    };
  }

  const getZipcodeValidation = async (zipCode: string) => {
    const { get } = await useAxios({ useAuth: false });
    const endpointUrl = `v1/zipcode-composite-ms/service/coverage/${zipCode}`;

    const response = await get(endpointUrl);

    if (response) {
      return response;
    }
  };

  const getStoresByCoordinates = async (
    latitude: number,
    longitude: number,
    distance = 500
  ) => {
    let stores = [];
    const { get } = await useAxios();
    const url = `v1/location-composite-ms/locations/search/by-coordinate?latitude=${latitude}&longitude=${longitude}&distance=${distance}&rnd=${Math.random()}`;

    const response = await get(url);

    if (response) {
      stores = response?.data;

      return stores;
    }
  };

  const getLocationByID = async (locationId = 0) => {
    let location = {};
    const { get } = await useAxios();
    const url = `v1/location-composite-ms/locations/${locationId}?rnd=${Math.random()}`;

    const response = await get(url);

    if (response) {
      location = response?.data || {};

      return location;
    }
  };

  async function getDisclosurePersonalInfo() {
    const { get } = await useAxios();

    const url = 'v1/personal-composite-ms/applicant/personal-data';

    const response = await get(url);

    if (response) {
      const stateCode = response?.homeAddress?.stateCode;

      return stateCode;
    }
  }

  async function getDisclosureState() {
    const { get } = await useAxios();

    const state = await getDisclosurePersonalInfo();

    const url = `v1/disclosure-composite-ms/disclosure-configs/${state}/state`;

    const response = await get(url);

    if (!response) return;

    const getDisclosureCode = (code = '') =>
      response?.data?.find((item) => item?.disclosureCode === code);

    // Search array for the codes that exist
    const codesList = [
      'ecc',
      'pfpp',
      'capp',
      'tnpdlexcloanins',
      'txpdlcab',
      'txtlpcab',
      'mspdlpamphlet',
      'deilprate',
      'ohilpprincipal',
      'wypdlnotice',
    ]
      .map((v) => {
        const value = getDisclosureCode(v.toUpperCase());

        return {
          [v]: {
            disclosureCode: value?.disclosureCode || null,
            disclosure: value?.disclosure || null,
          },
        };
      })
      .reduce((a, s) => ({ ...a, ...s }), {});

    return { codesList, response };
  }

  async function postDisclosure(tnInput) {
    const { post } = await useAxios();
    const url = 'v1/disclosure-composite-ms/disclosure';
    const { response } = await getDisclosureState();
    const { applicationId } = await getApplicationData();

    response?.data?.data?.forEach((item) => {
      post(url, {
        applicationID: applicationId,
        disclosureID: item?.disclosureCode,
        acknowledgment: tnInput !== 'Yes',
      });
    });

    // TODO: Add routing after success on disclosure service above.
  }

  async function getPreferencesData() {
    const { get } = await useAxios();
    const url = 'v1/preferences-composite-ms/preferences';

    return get(url);
  }

  async function putPreferencesData(to: Routes) {
    const { put } = await useAxios();
    const router = useRouter();
    const url = 'v1/preferences-composite-ms/preferences';

    return (payload) => {
      return put(url, payload).then(() => {
        if (to) {
          router.push(to);
        }
      });
    };
  }

  const postUploadUserDocuments = async () => {
    const CancelToken = axios.CancelToken;
    const data = { response: null, error: null };
    const { post } = await useAxios();
    const url = `v1/document-composite-ms/document/user?rnd=${Math.random()}`;
    const cancelToken = CancelToken.source();

    return {
      cancelToken,
      async uploadFile(payload, onUploadProgress) {
        const response = await post(
          url,
          payload,
          { context: 'upload-file' },
          {
            onUploadProgress,
            cancelToken: cancelToken.token,
          }
        );

        if (response?.message) {
          data.error = response?.message;
        } else {
          data.response = response;
        }

        return data;
      },
    };
  };

  const getUserdocuments = async () => {
    let documents = [];
    const { get } = await useAxios();
    const url = `v1/document-composite-ms/document/user?rnd=${Math.random()}`;

    const response = await get(url);
    documents = response?.data?.documentDetails || [];

    documents = documents.map((document) => {
      const { fileName = '', documentId = 0 } = document;

      // The ID value is removed from the file name.
      return {
        ...document,
        fileName: fileName.split(`${documentId}_`)?.[1] || fileName,
        originalFileName: fileName,
      };
    });

    return documents;
  };

  return {
    deleteIncomeInfo,
    getApplicationData,
    getBankInfo,
    getContentful,
    getDisclosureState,
    getFinancialBankName,
    getIncomeInfo,
    getLocationByID,
    getPersonalInfo,
    getPreferencesData,
    getStoresByCoordinates,
    getUserdocuments,
    getZipcodeValidation,
    postApplication,
    postBankInfo,
    postDisclosure,
    postIncomeInfo,
    postUploadUserDocuments,
    putApplication,
    putIncomeInfo,
    putPersonalData,
    putPersonalDataAddress,
    putPersonalSsn,
    putPreferencesData,
  };
};
