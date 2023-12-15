const file = Bun.file("./input.txt");
const data = await file.text();

const WORD_NUM = new Map([
  ["one",   "1"],
  ["two",   "2"],
  ["three", "3"],
  ["four",  "4"],
  ["five",  "5"],
  ["six",   "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine",  "9"],
]);

let sum = 0;
const NUMBER_REGEX = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi;

data
  .split("\n")
  .forEach(line => {
    const matches = [...line.matchAll(NUMBER_REGEX)];
    const numbers = matches.flatMap(match => WORD_NUM.get(match[1]) ?? match[1])
    sum += Number(numbers[0] + numbers[numbers.length - 1]) || 0;
  });

console.log(sum);
