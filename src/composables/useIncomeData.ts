export default () => {
  const income = useState('incomeData', () => null);

  function setIncomeData(value: any) {
    income.value = value;
  }
  return {
    getIncomeData: computed(() => income.value),
    setIncomeData,
  };
};
