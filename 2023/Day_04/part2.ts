
const file = Bun.file("./input.txt");
const data: string[] = (await file.text()).split("\n");

let sum = 0;
let copies = new Array(data.length).fill(1);

for (const [index, line] of data.entries()) {
  const matches = [...line.matchAll(/^Card\s+\d+\:\s+((?:\d+\s+)+)\|\s+((?:\d+\s*)+)/gm)];

  if (matches.length == 0) continue;

  const [_, winningNumber, selectedNumber] = matches[0];

  const winningNumArr = winningNumber.trim().split(/\s+/);
  const selectedNumArr = selectedNumber.trim().split(/\s+/);

  const result = new Set([
    ...winningNumArr,
    ...selectedNumArr
  ]);

  const matchingNumbers = (winningNumArr.length + selectedNumArr.length) - result.size;

  let copyMin = Math.min(index + 1 + matchingNumbers, data.length - 1);
  for (let i = index + 1; i < copyMin; i++) {
    copies[i] += copies[index];
  }

  sum += copies[index];
}

console.log(sum);
