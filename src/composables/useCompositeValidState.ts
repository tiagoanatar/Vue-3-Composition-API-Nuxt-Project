// Stores and exposes the state that represent if a composite fetch is valid or not,
export const useCompositeValidState = () => {
  const validState = useState('compositeValidState', () => null);

  function setCompositeValidState(value: null | string) {
    validState.value = value;
  }

  return {
    getCompositeValidState: computed(() => validState.value),
    setCompositeValidState,
  };
};
