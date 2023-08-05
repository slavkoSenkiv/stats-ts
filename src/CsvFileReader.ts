import fs from 'fs';
import { MatchResults } from './MatchResults';
import { dateStringToDate } from './utils';


type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  data: string[][] = []//MatchData[] = [];

  constructor(public filename: string){}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    /* .map((row: string): MatchData => {
      return []
    }) */
  }
}