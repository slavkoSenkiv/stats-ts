import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract strArrToTuple(row: string[]): T;

  read() {
    this.data = fs
    .readFileSync(this.filename, {encoding: 'utf-8'})
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(this.strArrToTuple)
  }
}
//1