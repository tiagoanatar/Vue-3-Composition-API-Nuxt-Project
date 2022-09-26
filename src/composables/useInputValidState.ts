// Stores and exposes the state that represent if a Input (form) is valid or not,
export const useInputValidState = () => {
  const validState = useState('inputValidState', () => false);

  function setInputValidState(value: boolean) {
    validState.value = value;
  }

  return {
    getInputValidState: computed(() => validState.value),
    setInputValidState,
  };
};
