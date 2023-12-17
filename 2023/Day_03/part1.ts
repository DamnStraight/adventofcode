const file = Bun.file("./input.txt");
const data: string[] = (await file.text()).split("\n");

let sum = 0;
const SYMBOL_REGEX = /[^\.\w]/;

for (let i = 0; i < data.length; i++) {
  const matches = data[i].matchAll(/(?<=([^\.\w\n])*)\d+(?=([^\.\w])*)/gm);

  for (const match of matches) {
    const [partNumber, symbolBefore, symbolAfter] = match;
    const startIndex = match.index ?? 0;

    // If our capture groups are not empty, we can skip further symbol checks
    if (symbolBefore || symbolAfter) {
      sum += Number(partNumber);
      continue;
    }

    // If this is not the first iteration, check the row above for symbols
    if (i != 0 && SYMBOL_REGEX.test(data[i - 1].substring(startIndex - 1, startIndex + partNumber.length + 1))) {
      sum += Number(partNumber);
      continue;
    }

    // If this is not the last iteration, check the row below for symbols
    if ((i != data.length - 1) && SYMBOL_REGEX.test(data[i + 1].substring(startIndex - 1, startIndex + partNumber.length + 1))) {
      sum += Number(partNumber);
      continue;
    }
  }
}

console.log(sum);
