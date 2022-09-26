// Perform the conditions for the programmatic navigation
import { Routes, navigationSchemas, queries } from '@/constants/pages';

export default () => {
  function getFinancialBankInformationRedirect() {
    navigateTo(navigationSchemas[Routes.FinancialBankInformation].bankInfo);
  }

  function getReApplyBankInformationRedirect() {
    navigateTo(navigationSchemas[Routes.ReApplyUpdateBankInformation].bankInfo);
  }

  // TODO: Add names for the inputs in order avoid order change issues
  function getFinancialJobStatusRedirect(input) {
    if (input.value === input.options[0]) {
      navigateTo(navigationSchemas[Routes.FinancialJobStatus].employed);
    }
    if (input.value === input.options[1]) {
      navigateTo(navigationSchemas[Routes.FinancialJobStatus].selfEmployed);
    }
    if (input.value === input.options[2]) {
      navigateTo(navigationSchemas[Routes.FinancialJobStatus].retired);
    }
  }

  function getFinancialEmployerInformationRedirect() {
    navigateTo(
      navigationSchemas[Routes.FinancialEmployerInformation].employerName
    );
  }

  function getFinancialPaymentFrequencyRedirect(...args) {
    const input = args[0];

    // Employed
    if (args[1] === queries[Routes.FinancialJobStatus].employed) {
      navigateTo(navigationSchemas[Routes.FinancialPaymentFrequency].regular);
      return;
    }

    // Self employed + non regular payment
    if (
      input.value === input.options[4] &&
      args[1] === queries[Routes.FinancialJobStatus].selfEmployed
    ) {
      navigateTo(
        navigationSchemas[Routes.FinancialPaymentFrequency]
          .nonRegularSelfEmployed
      );
      return;
    }

    // Self employed
    if (args[1] === queries[Routes.FinancialJobStatus].selfEmployed) {
      navigateTo(
        navigationSchemas[Routes.FinancialPaymentFrequency].selfEmployed
      );
      return;
    }

    // Receive assistance
    navigateTo(navigationSchemas[Routes.FinancialPaymentFrequency].retired);
  }

  function getFinancialIncomeInformationRedirect() {
    navigateTo(navigationSchemas[Routes.FinancialIncomeInformation].income);
  }

  function getFinancialPaymentPeriodRedirect(...args) {
    // Self employed and + non regular
    if (
      args[0] === queries[Routes.FinancialJobStatus].selfEmployed &&
      args[1] === queries[Routes.FinancialPaymentFrequency].nonRegular
    ) {
      navigateTo(
        navigationSchemas[Routes.FinancialPaymentPeriod].selfEmployedNonRegular
      );
      return;
    }

    // Self employed
    if (args[0] === queries[Routes.FinancialJobStatus].selfEmployed) {
      navigateTo(navigationSchemas[Routes.FinancialPaymentPeriod].selfEmployed);
      return;
    }

    // Employed
    if (args[0] === queries[Routes.FinancialJobStatus].employed) {
      navigateTo(navigationSchemas[Routes.FinancialPaymentPeriod].employed);
      return;
    }

    // Receive assistance
    navigateTo(navigationSchemas[Routes.FinancialPaymentPeriod].retired);
  }

  function getFinancialPaymentTypeRedirect() {
    navigateTo(navigationSchemas[Routes.FinancialPaymentType].summary);
  }

  function getFinancialSummaryRedirect() {
    navigateTo(navigationSchemas[Routes.FinancialSummary].jobStatus);
  }

  //  Re-Apply Redirect
  function getReApplyJobStatusRedirect(input) {
    if (input.value === input.options[0]) {
      navigateTo(navigationSchemas[Routes.ReApplyJobStatus].employed);
    }
    if (input.value === input.options[1]) {
      navigateTo(navigationSchemas[Routes.ReApplyJobStatus].selfEmployed);
    }
    if (input.value === input.options[2]) {
      navigateTo(navigationSchemas[Routes.ReApplyJobStatus].retired);
    }
  }

  function getReApplyJobIncomeSummaryRedirect() {
    navigateTo(navigationSchemas[Routes.ReApplyEmployerInformation].jobStatus);
  }

  function getReApplyEmployerInformationRedirect() {
    navigateTo(
      navigationSchemas[Routes.ReApplyEmployerInformation].employerName
    );
  }

  function getReApplyPaymentFrequencyRedirect(...args) {
    const input = args[0];

    // Employed
    if (args[1] === queries[Routes.ReApplyJobStatus].employed) {
      navigateTo(navigationSchemas[Routes.ReApplyPaymentFrequency].regular);
      return;
    }

    // Self employed + non regular payment
    if (
      input.value === input.options[4] &&
      args[1] === queries[Routes.ReApplyJobStatus].selfEmployed
    ) {
      navigateTo(
        navigationSchemas[Routes.ReApplyPaymentFrequency].nonRegularSelfEmployed
      );
      return;
    }

    // Self employed
    if (args[1] === queries[Routes.ReApplyJobStatus].selfEmployed) {
      navigateTo(
        navigationSchemas[Routes.ReApplyPaymentFrequency].selfEmployed
      );
      return;
    }

    // Receive assistance
    navigateTo(navigationSchemas[Routes.ReApplyPaymentFrequency].retired);
  }

  function getReApplyPaymentPeriodRedirect(...args) {
    // Self employed and + non regular
    if (
      args[0] === queries[Routes.ReApplyJobStatus].selfEmployed &&
      args[1] === queries[Routes.ReApplyPaymentFrequency].nonRegular
    ) {
      navigateTo(
        navigationSchemas[Routes.ReApplyPaymentPeriod].selfEmployedNonRegular
      );
      return;
    }

    // Self employed
    if (args[0] === queries[Routes.ReApplyJobStatus].selfEmployed) {
      navigateTo(navigationSchemas[Routes.ReApplyPaymentPeriod].selfEmployed);
      return;
    }

    // Employed
    if (args[0] === queries[Routes.ReApplyJobStatus].employed) {
      navigateTo(navigationSchemas[Routes.ReApplyPaymentPeriod].employed);
      return;
    }

    // Receive assistance
    navigateTo(navigationSchemas[Routes.ReApplyPaymentPeriod].retired);
  }

  function getReApplyPaymentTypeRedirect() {
    navigateTo(navigationSchemas[Routes.ReApplyPaymentType].summary);
  }

  function getReApplyIncomeInformationRedirect() {
    navigateTo(navigationSchemas[Routes.ReApplyIncomeInformation].income);
  }

  return {
    getFinancialBankInformationRedirect,
    getReApplyBankInformationRedirect,
    getFinancialEmployerInformationRedirect,
    getFinancialIncomeInformationRedirect,
    getFinancialJobStatusRedirect,
    getFinancialPaymentFrequencyRedirect,
    getFinancialPaymentPeriodRedirect,
    getFinancialPaymentTypeRedirect,
    getFinancialSummaryRedirect,
    getReApplyJobIncomeSummaryRedirect,
    getReApplyPaymentTypeRedirect,
    getReApplyEmployerInformationRedirect,
    getReApplyJobStatusRedirect,
    getReApplyPaymentFrequencyRedirect,
    getReApplyPaymentPeriodRedirect,
    getReApplyIncomeInformationRedirect,
  };
};
