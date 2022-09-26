// NOTE: According to ticket DE6170 this value must be a constant, equal to 1850
// https://rally1.rallydev.com/#/?detail=/defect/643089689321&fdp=true
export const MIN_BIRTHDAY_DATE_VALUE = 1850;

export const subtractYears = (numOfYears, date = new Date()) => {
  date.setFullYear(date.getFullYear() - numOfYears);
  return new Date(date).toISOString().slice(0, 10);
};

export const subtractDays = (date1: Date, date2: Date): number => {
  date1 = new Date(date1);
  date2 = new Date(date2);
  const timeResult: number = Math.abs(date2?.getTime() - date1?.getTime());
  const daysResult = Math.ceil(timeResult / (1000 * 60 * 60 * 24));
  return daysResult;
};
/*
 * Function that compares the current date with another date and validates
 * if the date is greater than the current date.
 * NOTE: The date comparison is advised to be done in the backend
 */
export const compareDateWithCurrent = (date: Date = new Date()): boolean => {
  const currentDate = new Date().getTime();
  const dateTime = date.getTime();
  return dateTime >= currentDate;
};

export const compareDateWithPrevious = (date1: Date, date2: Date): boolean => {
  const lastDate = date1?.getTime();
  const nextDate = date2?.getTime();
  return lastDate < nextDate;
};

export const todaysDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const result = mm + '/' + dd + '/' + yyyy;
  return result;
};
