import { CsvFileReader } from "./CsvFileReader";  
import { MatchResult } from "./MatchResult";
import { stringDateToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {

  strArrToTuple(row: string[]): MatchData {
    return [
      stringDateToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}