import dayjs from "dayjs";

export const getReadableDate = (date:string): string => {
  return dayjs(date).format('ddd MMM D, YYYY');
}

export const truncateString = (str: string): string => {
  return str.length > 50 ? str.substring(0, 47) + "..." : str;
}