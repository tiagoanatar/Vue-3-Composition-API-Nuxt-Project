export enum Pages {
  AccountDetails = 'account-details',
  BankStatement = 'bank-statement',
  ComponentLibrary = 'component-library',
  ContactUs = 'contact-us',
  ConnectPlaid = 'connect-plaid',
  DigitalWallet = 'digital-wallet',
  Dashboard = 'dashboard',
  DriverLicense = 'driver-license',
  LandingPage = 'landing-page',
  LoanApplicationTimeline = 'loan-application-timeline',
  PaydayLoanInformation = 'payday-loan-information',
  Profile = 'profile',
  ProofOfIncome = 'proof-of-income',
  StoreLocator = 'store-locator',
  Refinance = 're-finance',
  ReviewDisclosures = 'review-disclosures',
  UploadNewDocument = 'upload-new-document',
}

export enum Routes {
  AccountDetails = '/profile/account-details',
  AccountDetailsMenu = '/profile/account-details',
  AddressReApplyVerification = '/re-apply/information-verification/address-info',
  BankStatement = '/verify-identity/bank-statement',
  ComponentLibrary = '/component-library',
  ContactUs = '/profile/contact-us',
  ConnectPlaid = '/connect-finances/connect-plaid',
  Dashboard = '/dashboard',
  DigitalWallet = '/profile/digital-wallet',
  DigitalWalletAddDebitCard = '/profile/digital-wallet/add-debit-card',
  DigitalWalletEditPayment = '/profile/digital-wallet/edit-payment-method',
  EligibleLoans = '/eligible-loans/multi-offer',
  ExitAplication = '/loan-application/exit-application',
  FinanceReApplyVerification = '/re-apply/information-verification/bank-info',
  FinancialBankInformation = '/loan-application/step-two/bank-information',
  FinancialEmployerInformation = '/loan-application/step-two/employer-information',
  FinancialIncomeInformation = '/loan-application/step-two/income-information',
  FinancialJobStatus = '/loan-application/step-two/job-status',
  FinancialPaymentFrequency = '/loan-application/step-two/payment-frequency',
  FinancialPaymentPeriod = '/loan-application/step-two/payment-period',
  FinancialPaymentType = '/loan-application/step-two/payment-type',
  FinancialSuccessMessage = '/loan-application/step-two/success-message',
  FinancialSummary = '/loan-application/step-two/financial-summary',
  FindStore = '/store-locator',
  Landing = '/',
  LoanApplicationTimeline = '/dashboard/loan-application-timeline',
  LoanOriginationPayday = '/loan-origination/installment-loan/new-customer/money-destination',
  Login = '/signin/login',
  ManageEmployment = '/manage-employment/income-summary',
  ManagePassword = '/profile/manage-password',
  ManagePreferences = '/profile/manage-preference',
  MyDocuments = '/profile/my-documents',
  PaydayLoanInformation = '/re-apply/payday-loan-information',
  PersonalAddress = '/loan-application/step-one/personal-address',
  PersonalIdentity = '/loan-application/step-one/personal-identity',
  PersonalInformation = '/loan-application/step-one/personal-information',
  PersonalSsn = '/loan-application/step-one/personal-ssn',
  PersonalSummary = '/loan-application/step-one/personal-summary',
  ReApplyAddress = '/re-apply/address-information',
  Profile = '/profile/menu-page',
  ProfileMenu = '/profile/menu-page',
  ProofOfIncome = '/verify-identity/proof-of-income',
  ReApplyEmployerInformation = '/re-apply/employer-information',
  ReApplyIdentity = '/re-apply/identity-information',
  ReApplyIncomeInformation = '/re-apply/income-information',
  ReApplyJobStatus = '/re-apply/job-status',
  ReApplyBankInformation = '/re-apply/information-verification/bank-info',
  ReApplyEmployeeInformation = '/re-apply/information-verification',
  ReApplyUpdateBankInformation = '/re-apply/bank-information',
  ReApplyAddressInformation = '/re-apply/address-information',
  ReApplyLoanOriginationEligibleLoansMultiOffer = '/re-apply/loan-origination/eligible-loans/multi-offer',
  ReApplyLoanOriginationEligibleLoansSingleOfferInstallmentLoan = '/re-apply/loan-origination/eligible-loans/single-offer/installment-loan',
  ReApplyLoanOriginationEligibleLoansSingleOfferLineOfCredit = '/re-apply/loan-origination/eligible-loans/single-offer/line-of-credit',
  ReApplyLoanOriginationEligibleLoansSingleOfferPaydayLoan = '/re-apply/loan-origination/eligible-loans/single-offer/payday-loan',
  ReApplyLoanOriginationInstallmentLoanLoanRepayment = '/re-apply/loan-origination/installment-loan/loan-repay',
  ReApplyLoanOriginationInstallmentLoanMoneyDestination = '/re-apply/loan-origination/installment-loan/money-destination',
  ReApplyLoanOriginationLoanInstallmentLoanSummary = '/re-apply/loan-origination/installment-loan/loan-summary',
  ReApplyLoanOriginationLoanPaydayLoanSummary = '/re-apply/loan-origination/payday-loan/loan-summary',
  ReApplyLoanOriginationLoanSuccess = '/re-apply/loan-origination/success-message',
  ReApplyLoanOriginationPaydayLoanLoanRepayment = '/re-apply/loan-origination/payday-loan/loan-repay',
  ReApplyLoanOriginationPaydayLoanMoneyDestination = '/re-apply/loan-origination/payday-loan/money-destination',
  ReApplyPaymentFrequency = '/re-apply/payment-frequency',
  ReApplyPaymentPeriod = '/re-apply/payment-period',
  ReApplyPaymentType = '/re-apply/payment-type',
  Register = '/signin/register',
  ReviewDisclosures = '/re-apply/review-disclosures',
  StoreLocator = '/store-locator',
  UpdateContactInfo = '/profile/account-details/contact-information',
  UpdateDriverLicense = '/profile/account-details/driver-license',
  UpdateEmail = '/profile/account-details/email-address',
  UpdateHomeAddress = '/profile/account-details/address-information',
  UploadNewDocument = '/profile/account-details/upload-new-document',
  Zipcode = '/loan-application/zip-code',
  ReFinanceLoanOriginationLoanProcessed = '/re-finance/loan-origination/loan-processed',
  RefinanceLoanOriginationStatusComplete = '/re-finance/loan-origination/status-complete',
  RefinanceLoanOriginationStatusScheduled = '/re-finance/loan-origination/status-scheduled',
  RefinanceLoanOriginationInstallmentLoanLoanSummary = '/re-finance/loan-origination/installment-loan/loan-summary',
  RefinanceLoanOriginationPaydayLoanSummary = '/re-finance/loan-origination/payday-loan/loan-summary',
  RefinanceLoanOriginationTitleLoanLoanSummary = '/re-finance/loan-origination/title-loan/loan-summary',
}

export enum RouteLabels {
  AccountDetails = 'account details',
  BankStatement = 'bank statement',
  ContactUs = 'contact us',
  ConnectPlaid = 'connect with plaid',
  DigitalWallet = 'digital wallet',
  FindStore = 'find a store',
  ManageEmployment = 'manage employment',
  ManagePassword = 'manage password',
  ManagePreferences = 'manage preferences',
  MyDocuments = 'my documents',
  Profile = 'profile',
  ProofOfIncome = 'proof of income',
  UpdateContactInfo = 'update contact information',
  UpdateDriverLicense = `update driver's license`,
  UpdateEmail = 'update email address',
  UpdateHomeAddress = 'update home address',
  UploadNewDocument = 'upload new document',
}

// Create a key value object with the name of the pages.
export const PageNames = Object.keys(Routes)
  .map((v) => ({ [v]: v }))
  .reduce((a, s) => ({ ...a, ...s }), {});

export const queries = {
  [Routes.FinancialJobStatus]: {
    employed: 'employed',
    selfEmployed: 'self-employed',
    retired: 'retired',
  },

  [Routes.ReApplyJobStatus]: {
    employed: 'employed',
    selfEmployed: 'self-employed',
    retired: 'retired',
  },

  [Routes.FinancialPaymentFrequency]: {
    nonRegular: 'non-regular',
  },

  [Routes.ReApplyPaymentFrequency]: {
    nonRegular: 'non-regular',
  },
};

export const navigationSchemas = {
  [Routes.FinancialBankInformation]: {
    bankInfo: {
      path: Routes.FinancialJobStatus,
    },
  },

  [Routes.FinancialJobStatus]: {
    employed: {
      path: Routes.FinancialEmployerInformation,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.FinancialPaymentFrequency,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].selfEmployed,
      },
    },
    retired: {
      path: Routes.FinancialPaymentFrequency,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].retired,
      },
    },
  },

  [Routes.FinancialEmployerInformation]: {
    employerName: {
      path: Routes.FinancialPaymentFrequency,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].employed,
      },
    },
  },

  [Routes.FinancialPaymentFrequency]: {
    regular: {
      path: Routes.FinancialPaymentPeriod,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.FinancialPaymentPeriod,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].selfEmployed,
      },
    },
    nonRegularSelfEmployed: {
      path: Routes.FinancialIncomeInformation,
      query: {
        nonRegular: queries[Routes.FinancialPaymentFrequency].nonRegular,
        jobStatus: queries[Routes.FinancialJobStatus].selfEmployed,
      },
    },
    retired: {
      path: Routes.FinancialPaymentPeriod,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].retired,
      },
    },
  },

  [Routes.FinancialIncomeInformation]: {
    income: {
      path: Routes.FinancialPaymentType,
    },
  },

  [Routes.FinancialPaymentPeriod]: {
    employed: {
      path: Routes.FinancialIncomeInformation,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.FinancialIncomeInformation,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].selfEmployed,
      },
    },
    selfEmployedNonRegular: {
      path: Routes.FinancialIncomeInformation,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].selfEmployed,
        paymentFrequency: queries[Routes.FinancialPaymentFrequency].nonRegular,
      },
    },
    retired: {
      path: Routes.FinancialIncomeInformation,
      query: {
        jobStatus: queries[Routes.FinancialJobStatus].retired,
      },
    },
  },

  [Routes.FinancialPaymentType]: {
    summary: {
      path: Routes.FinancialSummary,
    },
  },

  [Routes.FinancialSummary]: {
    jobStatus: {
      path: Routes.FinancialJobStatus,
    },
  },

  [Routes.ReApplyJobStatus]: {
    employed: {
      path: Routes.ReApplyEmployerInformation,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.ReApplyPaymentFrequency,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].selfEmployed,
      },
    },
    retired: {
      path: Routes.ReApplyPaymentFrequency,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].retired,
      },
    },
  },

  [Routes.ReApplyEmployerInformation]: {
    jobStatus: {
      path: Routes.ReApplyJobStatus,
    },
    employerName: {
      path: Routes.ReApplyPaymentFrequency,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].employed,
      },
    },
  },

  [Routes.ReApplyUpdateBankInformation]: {
    bankInfo: {
      path: Routes.ReApplyJobStatus,
    },
  },

  [Routes.ReApplyPaymentFrequency]: {
    regular: {
      path: Routes.ReApplyPaymentPeriod,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.ReApplyPaymentPeriod,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].selfEmployed,
      },
    },
    nonRegularSelfEmployed: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        nonRegular: queries[Routes.ReApplyPaymentFrequency].nonRegular,
        jobStatus: queries[Routes.ReApplyJobStatus].selfEmployed,
      },
    },
    nonRegular: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        nonRegular: queries[Routes.ReApplyPaymentFrequency].nonRegular,
      },
    },
    retired: {
      path: Routes.ReApplyPaymentPeriod,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].retired,
      },
    },
  },

  [Routes.ReApplyPaymentPeriod]: {
    employed: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].employed,
      },
    },
    selfEmployed: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].selfEmployed,
      },
    },
    selfEmployedNonRegular: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].selfEmployed,
        paymentFrequency: queries[Routes.ReApplyPaymentFrequency].nonRegular,
      },
    },
    retired: {
      path: Routes.ReApplyIncomeInformation,
      query: {
        jobStatus: queries[Routes.ReApplyJobStatus].retired,
      },
    },
  },

  [Routes.ReApplyPaymentType]: {
    summary: {
      path: Routes.FinanceReApplyVerification,
    },
  },

  [Routes.ReApplyIncomeInformation]: {
    income: {
      path: Routes.ReApplyPaymentType,
    },
  },
};
