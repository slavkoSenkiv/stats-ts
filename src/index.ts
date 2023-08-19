import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

//create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader 
//and pass in smth satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches   

const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
