export class StringToDate {
  date: string[] = [];
  constructor (public stringDate: string) {}

  convert(){
    this.date = this.stringDate.split('/')
  }

}