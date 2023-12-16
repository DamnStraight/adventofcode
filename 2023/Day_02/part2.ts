const file = Bun.file("./input.txt");
const data = await file.text();

interface ColorMax {
  [key: string]: number
}

let sum = 0;

data
  .split("\n")
  .filter(line => line)
  .forEach(round => { 
    const [gameId, gameResults] = round.split(": ");
    const [_, id] = gameId.split(" ");
    let colorMax: ColorMax = { 'red': 0, 'blue': 0, 'green': 0 };

    gameResults
      .split(";")
      .forEach(game => {
        game
        .trim()
        .split(", ")
        .forEach(draw => {
          const [amount, color] = draw.split(" ");
          colorMax[color] = !!colorMax[color] 
              ? Math.max(colorMax[color], Number(amount)) 
              : Number(amount);
        });
      });

  sum += (colorMax.red ?? 0) * (colorMax.blue ?? 0) * (colorMax.green ?? 0);
  });

console.log(sum);
