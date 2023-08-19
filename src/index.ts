import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

//create an object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in smth satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches   
 