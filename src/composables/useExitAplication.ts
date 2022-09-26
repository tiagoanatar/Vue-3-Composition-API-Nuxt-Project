/**
 * This composable saves the information that is used in the
 * save and exit screen, if the page is
 * reloaded this information would be lost.
 * TODO: Validate the way in which the save and exit page
 * can have this information without the need to save it in the state
 */
export const useExitAplication = () => {
  const application = useState('application', () => ({
    applicationId: '',
    page: '',
    data: {},
    query: '',
  }));

  function setApplication(
    applicationId = '',
    page = '',
    data = {},
    query = ''
  ) {
    application.value = {
      applicationId,
      page,
      data,
      query,
    };
  }

  return {
    getApplication: computed(() => application.value),
    setApplication,
  };
};
