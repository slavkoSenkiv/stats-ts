import fs from 'fs';
import { MatchResults } from './MatchResults';


type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  data: string = ''; //MatchData[] = [];

  constructor(public filename: string){}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8'
    });
    //.split('\n')
  }
}