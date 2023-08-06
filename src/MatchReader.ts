import { CsvFileReader } from "./CsvFileReader";  
import { MatchResult } from "./MatchResult";
import { stringDateToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader {

  strArrToTuple(row: string[]): MatchData {
    return [
      stringDateToDate(row[0])
    ]
  }

}