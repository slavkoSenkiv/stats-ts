import { log } from "console";
import { CsvFileReader } from "./CsvFileReader";
import { StringToDate } from "./utils";

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(reader.data);

const exmplDate: string = reader.data[0][0];
console.log(exmplDate, typeof(exmplDate));
const converter = new StringToDate(exmplDate);
converter.convert();
console.log(converter.date, typeof(converter.date));



//console.log(exmplDate, typeof(exmplDate))



