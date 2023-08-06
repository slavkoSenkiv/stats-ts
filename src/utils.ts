export const stringDateToDate = (stringDate: string): Date => {
  
  const dateParts: number[] = stringDate
  .split('/')
  .map((strNum: string) => {
    return parseInt(strNum)
  });

  return new Date(
    dateParts[2],
    dateParts[1] - 1,
    dateParts[0]
  )
}