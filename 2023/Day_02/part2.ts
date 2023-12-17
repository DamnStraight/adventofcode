const file = Bun.file("./input.txt");
const data = await file.text();

interface ColorMin {
  [key: string]: number
}

let sum = 0;

data
  .split("\n")
  .filter(line => line)
  .forEach(round => { 
    const [gameId, gameResults] = round.split(": ");
    const [_, id] = gameId.split(" ");
    let colorMin: ColorMin = { 'red': 0, 'blue': 0, 'green': 0 };

    gameResults
      .split(";")
      .forEach(game => {
        game
        .trim()
        .split(", ")
        .forEach(draw => {
          const [amount, color] = draw.split(" ");
          colorMin[color] = !!colorMin[color] 
              ? Math.max(colorMin[color], Number(amount)) 
              : Number(amount);
        });
      });

    sum += (colorMin.red) * (colorMin.blue) * (colorMin.green);
  });

console.log(sum);
