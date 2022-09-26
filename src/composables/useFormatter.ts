/**
 * Coverts a number into USD currency.
 * Example: formatPrice(3500) returns "$3,500"
 */
export const formatPrice = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
};

/**
 * Coverts a string into number.
 * Example: formatStringToNumber('3,500.55') returns 3500.00"
 */
export const formatStringToNumber = (value: string): number => {
  return Number(value.replace('$ ', '').replaceAll(',', ''));
};
