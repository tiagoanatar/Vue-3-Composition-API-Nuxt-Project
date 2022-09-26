/**
 * Check if a string is a valid json
 */
export const isJsonString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (_) {
    return false;
  }
  return true;
};
