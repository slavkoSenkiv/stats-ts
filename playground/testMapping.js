"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
class SomeClassOne {
    constructor() {
        this.parsedData = [['2023/08/01', 'TeamX', 'TeamY', '2', '1', 'W', 'StadiumZ'],
            ['2023/08/02', 'TeamP', 'TeamQ', '0', '0', 'D', 'StadiumR']];
        this.transformedData = this.parsedData.map(this.mapRow);
    }
    mapRow(row) {
        return [
            (0, utils_1.stringDateToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
class SomeClassTwo {
    constructor() {
        this.parsedData = [['2023/08/01', 'TeamX', 'TeamY', '2', '1', 'W', 'StadiumZ'],
            ['2023/08/02', 'TeamP', 'TeamQ', '0', '0', 'D', 'StadiumR']];
        this.transformedData = this.parsedData.map(row => this.mapRow(row));
    }
    mapRow(row) {
        return [
            (0, utils_1.stringDateToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
const classOneInst = new SomeClassOne;
console.log('classOne with this.mapRow', classOneInst.transformedData);
const classTwoInst = new SomeClassTwo;
console.log('classTwo with this.mapRow', classTwoInst.transformedData);
