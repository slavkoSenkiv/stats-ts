export const dateStringToDate = (dateString: string): Date => {
  let dateParts: number[] = dateString.split('/').map((part: string): number => parseInt(part));
  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
}