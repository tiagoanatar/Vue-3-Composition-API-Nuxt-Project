import { formatStringToNumber } from '@/composables/useFormatter';
import { removeMaskMobilePhoneNumber } from '@/constants/masks';
import { array, boolean, date, object, string } from 'yup';
import {
  MIN_BIRTHDAY_DATE_VALUE,
  compareDateWithCurrent,
  compareDateWithPrevious,
  subtractDays,
  subtractYears,
} from '@/composables/schemas/useDate';

// Holds bank information associated to routing number
const { getFinancialBankName } = useComposite();

async function handleRoutingNumber(value) {
  const state = await getFinancialBankName(value);
  return state;
}

const formValidations = {
  address: string().required('Address is required'),
  bankName: string().required('Bank name is required'),
  dateOfBirth: date()
    .required('Date is required')
    .max(`${subtractYears(18)}`, 'You must be older than 18')
    .typeError('Whoops, invalid Date. Please try again.')
    .test(
      'min-date-of-birth',
      `Must be bigger than 01/01/${MIN_BIRTHDAY_DATE_VALUE}`,
      function (_, context) {
        // Note: It was necessary to take the original value,
        // since the date returned by yup, for the year 0001 is equal to 1901
        const year = Number(
          context?.originalValue
            ?.split('-')
            ?.filter((v) => v.length === 4)?.[0] || ''
        );
        return year >= MIN_BIRTHDAY_DATE_VALUE;
      }
    ),
  cardHolder: string().required('Card holders name is required'),
  cardNumber: string()
    .min(16, 'Must have 16 digits.')
    .required('Card number is required'),
  cardCvv: string()
    .min(3, 'Must have 3 digits.')
    .required('Card CVV number is required'),
  checkbox: boolean()
    .required('Check box is required')
    .oneOf([true], 'Check box is required'),
  checkingAccNumber: string()
    .required('Checking account number is required')
    .min(8, 'Checking account number is too short. Should be 8 chars minimum.')
    .max(
      12,
      'Checking account number is too large. Should be less than 12 chars.'
    )
    .matches(/^[0-9]*$/, 'Only numbers are accepted'),
  smsOptIn: boolean(),
  confirmCheckingAccNumber: string().test(
    'account-match',
    'Account number must match',
    function (value) {
      return this.parent.checkingAccNumber === value;
    }
  ),
  driversLicenseExpiration: date()
    .required('Date is required')
    .test(
      'drivers-license-expiration',
      'Drivers license expiration date to be no earlier than today',
      function (value) {
        return compareDateWithCurrent(value);
      }
    )
    .typeError('Whoops, invalid Date. Please try again.'),
  driversLicense: string()
    .required('Driver license number is required')
    .length(12, 'Driver license must be valid')
    .matches(/^[a-z0-9]+$/i, 'Only alphanumeric are accepted')
    .test(
      'date-license',
      'Driver license number is required',
      function (value) {
        return value !== '';
      }
    ),
  email: string().email('Must be a valid email').required('Email is required'),
  employerName: string().required('Employer’s name is required'),
  expirationDate: date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('Expiration date is required')
    .min(new Date(), 'Date must be bigger than the today`s date'),
  signature: string().required('Signature name is required'),
  exitStatus: string().required(''),
  firstName: string()
    .required('First name is required')
    .matches(
      /^(?!.*[!@#$%])\s*[A-Za-z][A-Za-z ]*$/,
      'Only alphabets are allowed for this field'
    )
    .test('check-empty', 'First name cannot be empty', function (value) {
      return value?.length > 0;
    }),
  income: string()
    .required('Income value is required')
    .test('income', 'Income value must be above $99.99', function (value) {
      let testValue;
      if (value) {
        testValue = formatStringToNumber(value);
      }
      if (testValue > 99.99) {
        return true;
      }
    })
    .min(5, 'Income value must be above $99.99'),
  netIncome: string()
    .required('Income value is required')
    .test(
      'net-income-smaller-than-income',
      'Net income must be smaller than the value before taxes',
      function (value) {
        let beforeTax;
        let afterTax;
        if (value && this?.parent?.monthlyIncome) {
          beforeTax = formatStringToNumber(this?.parent?.monthlyIncome);
          afterTax = formatStringToNumber(value);
          return beforeTax > afterTax;
        }
      }
    )
    .test(
      'net-income-smaller-is-zero',
      'Net income must be bigger than zero',
      function (value) {
        let testValue;
        if (value) {
          testValue = formatStringToNumber(value);
          return testValue === 0 ? false : true;
        }
      }
    ),
  inputDate: date().required('Date is required'),
  inputDateMinMax: date()
    .required('Date is required')
    .min('2008-03-26', 'Date must be bigger than 2008-03-26')
    .max('2022-03-26', 'Date must be shorter than 2022-03-26'),
  jobStatus: string().required(''),
  lastName: string()
    .required('Last name is required')
    .matches(
      /^(?!.*[!@#$%])\s*[A-Za-z][A-Za-z ]*$/,
      'Only alphabets are allowed for this field '
    )
    .test('check-empty', 'Last name cannot be empty', function (value) {
      return value?.length > 0;
    }),
  password: string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  paymentFrequency: string().required('How often are you paid? is required'),
  manageDebitCards: string().required('Select your debit card'),
  paymentPeriod: date().required('Date is required'),
  paymentPeriod1: date()
    .required('Date is required')
    .typeError('Whoops, invalid Date. Please try again.')
    .min('2010-01-01', 'Must be bigger than 01/01/2010')
    .max(new Date(), 'Date must not be bigger than the today`s date'),
  paymentPeriod2: date()
    .required('Date is required')
    .min('2010-01-01', 'Must be bigger than 01/01/2010')
    .test(
      'date-last-checked',
      'Dates must be within 45 days of each other',
      function (value) {
        const result = subtractDays(value, this.parent.paymentPeriod1);
        return result <= 45;
      }
    )
    .test(
      'next-date-must-be-bigger',
      'The next paycheck date can not precede the last paycheck date',
      function (value) {
        const result = compareDateWithPrevious(
          this.parent.paymentPeriod1,
          value
        );
        return result;
      }
    )
    .typeError('Whoops, invalid Date. Please try again.'),
  paymentType: string().required('Are you paid by direct deposit? is required'),
  phoneNumber: string()
    .required('Phone number is required')
    .test('phone-number', 'Invalid Phone Number', function (value) {
      return removeMaskMobilePhoneNumber(value)?.length === 10;
    })
    .test('check-empty', 'Mobile number cannot be empty', function (value) {
      return value?.length > 0;
    }),
  radioSet1: string().required('Select a Radio option'),
  routingNumber: string()
    .required('Routing/ABA number is required')
    .length(9, 'Must have 9 digits')
    .matches(/^[0-9]*$/, 'Only numbers are accepted')
    // TODO: This validation test function needs improvement
    .test(
      'invalid-routing',
      'Invalid Routing/ABA number',
      async function (value) {
        if (value.length === 9) {
          const state = await handleRoutingNumber(value);
          if (state) {
            return true;
          }
        }
      }
    )
    .default(''),
  selectInput1: string().required('Select option must be chosen'),
  selectInput2: array().required('Select at least 1 option must be chosen'),
  ssn: string()
    .required('SSN number is required')
    .length(9, 'SSN must be valid')
    .matches(/^[0-9]*$/, 'Only numbers are accepted'),
  states: string().required('State option must be chosen'),
  surveyOption: string().required(
    'Help us understand your new loan needs is required'
  ),
  zipCode: string()
    .required('Zip code is required')
    .length(5, 'Zip code must be valid')
    .matches(/^(\d{5})?$/, 'Whoops, invalid zipcode. Please try again.'),
};

export const useLoginFormValidations = () =>
  object().shape({
    firstName: formValidations.firstName,
    lastName: formValidations.lastName,
    email: formValidations.email,
    phoneNumber: formValidations.phoneNumber,
    optionCheck1: formValidations.checkbox,
    optionCheck2: formValidations.checkbox,
    radioSet1: formValidations.radioSet1,
    inputDate1: formValidations.inputDate,
    inputDate2: formValidations.inputDateMinMax,
    selectInput1: formValidations.selectInput1,
    selectInput2: formValidations.selectInput2,
    password: formValidations.password,
  });

export const usePersonalInformationSchema = () =>
  object().shape({
    currentPhone: formValidations.phoneNumber,
    dateOfBirth: formValidations.dateOfBirth,
    firstName: formValidations.firstName,
    lastName: formValidations.lastName,
    smsOptIn: formValidations.smsOptIn,
  });

export const useUpdatePersonalInformationSchema = () =>
  object().shape({
    currentPhone: formValidations.phoneNumber,
    firstName: formValidations.firstName,
    lastName: formValidations.lastName,
    smsOptIn: formValidations.smsOptIn,
  });

export const usePersonalAddressSchema = () => {
  return (isValidAddress) => {
    return object().shape({
      address1: string()
        .required('Address is required')
        .test(
          'personal-address-match',
          'Address must be valid Address',
          function () {
            return isValidAddress;
          }
        )
        .test(
          'personal-address-empty',
          'Address is required',
          function (value) {
            return value !== '';
          }
        ),
    });
  };
};

export const useAccountDetailsUpdateEmailSchema = () =>
  object().shape({
    email: formValidations.email,
  });

export const usePersonalIdentitySchema = () =>
  object().shape({
    driversLicense: formValidations.driversLicense,
    driversLicenseExpiration: formValidations.driversLicenseExpiration,
    driversLicenseState: formValidations.states,
  });

export const usePersonalSsnSchema = () =>
  object().shape({
    ssn: formValidations.ssn,
  });

export const useBankInformationSchema = () =>
  object().shape({
    checkingAccNumber: formValidations.checkingAccNumber,
    confirmCheckingAccNumber: formValidations.confirmCheckingAccNumber,
    routingNumber: formValidations.routingNumber,
  });

export const useJobStatusSchema = () =>
  object().shape({
    jobStatus: formValidations.jobStatus,
  });

export const useLoanStatusSchema = () =>
  object().shape({
    loanStatus: formValidations.jobStatus,
  });

export const useEmployerInformationSchema = () =>
  object().shape({
    employerName: formValidations.employerName,
  });

export const useSignatureSchema = () =>
  object().shape({
    signature: formValidations.signature,
  });

export const usePaymentFrequencySchema = () =>
  object().shape({
    paymentFrequency: formValidations.paymentFrequency,
  });

export const useManageDebitCardSchema = () =>
  object().shape({
    manageDebitCards: formValidations.manageDebitCards,
  });

export const usePaymentPeriodSchema = () =>
  object().shape({
    paymentPeriod1: formValidations.paymentPeriod1,
    paymentPeriod2: formValidations.paymentPeriod2,
  });

export const useIncomeInformationSchema = () =>
  object().shape({
    monthlyIncome: formValidations.income,
    netIncome: formValidations.netIncome,
  });

export const useIncomeInformationSchemaNonRegular = () =>
  object().shape({
    monthlyIncome: formValidations.income,
  });

export const useIncomeInformationSchemaNonRegularReceiveAssistance = () =>
  object().shape({
    grossIncome: formValidations.income,
  });

export const usePaymentTypeSchema = () =>
  object().shape({
    paymentType: formValidations.paymentType,
  });

export const useExitStatusSchema = () =>
  object().shape({
    exitStatus: formValidations.exitStatus,
  });

export const useZipcodeSchema = () =>
  object().shape({
    zipCode: formValidations.zipCode,
  });

export const useModalEmail = () =>
  object().shape({
    email: formValidations.email,
  });

export const useSurveyOptions = () =>
  object().shape({
    surveyOption: formValidations.surveyOption,
  });

export const useAddDebitCard = () =>
  object().shape({
    cardHolder: formValidations.cardHolder,
    cardNumber: formValidations.cardNumber,
    expirationDate: formValidations.expirationDate,
    cardCvv: formValidations.cardCvv,
  });

// TODO: Should be removed if not required
export const usePreferencesValidations = () => object().shape({});
