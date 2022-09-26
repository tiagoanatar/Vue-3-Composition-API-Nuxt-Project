// Stores and exposes the state that represent if a composite fetch is valid or not,
export const useRedirectValidState = () => {
  const validState = useState('redirectValidState', () => null);

  function setRedirectValidState(value: null | boolean) {
    validState.value = value;
  }

  return {
    getRedirectValidState: computed(() => validState.value),
    setRedirectValidState,
  };
};
