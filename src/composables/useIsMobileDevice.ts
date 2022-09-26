export default () => {
  /**
   * Function to check if the browser is opened on a mobile device
   * @returns {Boolean} whether or not the browser is opened in a mobile device
   */
  const isMobileDevice = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return {
    isMobile: computed(() => isMobileDevice()),
  };
};
