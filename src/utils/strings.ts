export const kebabToCapitalizeName = (name) =>
  name
    .split('-')
    .map((v) => `${v[0].toUpperCase()}${v.substr(1)}`)
    .join(' ');

/**
 * @function getWithDashLowercaseString - Will lowercase the string and with replacing space with dash i.e (Contact Us -> contact-us)
 * @param {LinkLabel} str.
 * @return {String}
 */
export const getWithDashLowercaseString = (str: string): string =>
  str.toLowerCase().replace(/\s/g, '-');
