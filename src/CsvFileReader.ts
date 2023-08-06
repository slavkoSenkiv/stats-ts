import fs from 'fs';

export abstract class CsvFileReader {
  data:string[][] = [];

  constructor(public filename: string) {}

  abstract strArrToTuple()

  read() {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string) => row.split(','))
    .map((row: string[]) => row.strArrToTuple)
  }
}