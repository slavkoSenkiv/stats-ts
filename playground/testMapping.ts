import { stringDateToDate } from "../src/utils";
import { MatchResult } from "../src/MatchResult";

class SomeClassOne {
  parsedData = [['2023/08/01', 'TeamX', 'TeamY', '2', '1', 'W', 'StadiumZ'],
                ['2023/08/02', 'TeamP', 'TeamQ', '0', '0', 'D', 'StadiumR']];
  mapRow(row: string[]) {
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
  transformedData = this.parsedData.map(this.mapRow); 
}

class SomeClassTwo {
  parsedData = [['2023/08/01', 'TeamX', 'TeamY', '2', '1', 'W', 'StadiumZ'],
                ['2023/08/02', 'TeamP', 'TeamQ', '0', '0', 'D', 'StadiumR']];
  mapRow(row: string[]) {
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

  transformedData = this.parsedData.map(row =>this.mapRow(row)); 
}

const classOneInst = new SomeClassOne;
console.log('classOne with this.mapRow', classOneInst.transformedData);

const classTwoInst = new SomeClassTwo;
console.log('classTwo with this.mapRow', classTwoInst.transformedData);