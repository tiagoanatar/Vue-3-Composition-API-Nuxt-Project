/**
 * Clean the string to prevent XSS attacks
 */
export const sanizateTags = (input: string): string =>
  input ? input.replace(/<\/?[^>]+(>|$)/g, '') : '';

/**
 * This helper returns the name and value of a form.
 * NOTE: The Form component of the vee-validate
 * library does not provide an option to get the
 * form data outside of the submit event.
 */
export const getFormDataValues = (form: HTMLFormElement): unknown => {
  return [...new FormData(form).entries()]
    ?.map((v) => ({ [v?.[0]]: sanizateTags(String(v?.[1] || '')) }))
    ?.reduce((a, s) => ({ ...a, ...s }), {});
};
