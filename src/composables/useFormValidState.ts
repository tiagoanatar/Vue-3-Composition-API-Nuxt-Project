// Stores and exposes the state that represent if a Form (form) is valid or not,
// useful if required to react to this state.
// TODO: validate if it works with different forms
export const useFormValidState = () => {
  const validState = useState('formValidState', () => false);
  const loadingState = useState('formLoadingState', () => false);

  function setFormValidState(value: boolean) {
    validState.value = value;
  }

  function setLoadingState(value: boolean) {
    loadingState.value = value;
  }

  return {
    getFormLoadingState: computed(() => loadingState.value),
    getFormValidState: computed(() => validState.value),
    setFormValidState,
    setLoadingState,
  };
};
