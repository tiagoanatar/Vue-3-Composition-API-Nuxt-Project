export const Masks = {
  UsPhone: '+1 (###) ###-####',
  ZipCode: 'XXXXX',
  Ssn: '###-##-####',
  Income: [
    '$ ###',
    '$ ####',
    '$ #,###',
    '$ ##,###',
    '$ ###,###',
    '$ ###,####',
    '$ #,###,###',
    '$ ##,###,###',
  ],
  ReservationCode: 'XXX-XXX-XXX-XXX',
  // TODO: Need to check the format from services. Need to remove if the service returns the mask in the response.
  CardNumber: '**',
  DebitCardNumber: '####-####-####-####',
  CVVCardNumber: '###',
};

/**
 * Because the service does not allow special characters,
 * the value sent to the service is unmasked.
 */
export const removeMaskMobilePhoneNumber = (phone = ''): string => {
  const removeArea = phone.includes('+1')
    ? (phone.split('+1')?.[1] || '').trim()
    : phone;

  return removeArea?.replace(/[^a-zA-Z0-9]/g, '');
};

/**
 * Apply the mask to the SSN value to be displayed on summary pages
 */
export const ssnMask = (ssn: string): string =>
  ssn
    ? `${'*'.repeat(3)}-${'*'.repeat(2)}-${ssn.substring(
        ssn.length - 4,
        ssn.length
      )}`
    : '';

/**
 * Secures an email by masking it with asterisks.
 * @example
 * Gived jhondoe@gmail.com you'll get j**o@gmail.com
 */
export const maskEmail = (email: string): string => {
  if (!email) return '';

  const atSymbol = '@';
  const middlepart = '***';
  const [name, domain] = email.split(atSymbol);

  const maskedName = name[0] + middlepart + name[name.length - 1];
  const maskedEmail = maskedName + atSymbol + domain;

  return maskedEmail;
};
