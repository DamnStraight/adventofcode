const file = Bun.file("./input.txt");
const data: string[] = (await file.text()).split("\n");

let score = 0;

for (const line of data) {
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
  score += (matchingNumbers == 0) 
    ? 0 
    : Math.pow(2, matchingNumbers - 1);
}


console.log(score);
