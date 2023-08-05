import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";

const reader = new CsvFileReader('football.csv');
reader.read();

let countWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin){
    countWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin){
    countWins++;
  }
}

console.log(`Man United won ${countWins} games`);

