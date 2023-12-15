
const file = Bun.file("./input.txt");
const data = await file.text();

let sum = 0;

data
  .split("\n")
  .forEach(line => {
    const numbers = [...line].filter(char => !isNaN(Number(char)));
    sum += Number(numbers[0] + numbers[numbers.length - 1]) || 0 ;
  });

console.log(sum);
