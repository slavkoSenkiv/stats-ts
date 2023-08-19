import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

/* 
//the variant with not static method in MatchReader class
//create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader 
//and pass in smth satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader); */

//the variant with static method in Match reader class
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
//matchReader.matches   

/* 
//if no static method in the class you have to go this way
const summary = new Summary(
  new WinsAnalysis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
); */

//if static method is present in the class you can go this way
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
