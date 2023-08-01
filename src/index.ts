import { CsvFileReader } from "./CSVFileReader";

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchesResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchesResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchesResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

 