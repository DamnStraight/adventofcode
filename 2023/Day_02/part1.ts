const file = Bun.file("./input.txt");
const data = await file.text();

const CUBES = new Map<string, number>([
  ['red',   12],
  ['green', 13],
  ['blue',  14]
]);

let sum = 0;

data
  .split("\n")
  .filter(line => line)
  .forEach(round => { 
    const [gameId, gameResults] = round.split(": ");
    const [_, id] = gameId.split(" ");

    let invalidGame = gameResults
      .split(";")
      .some(game => 
        game
        .trim()
        .split(", ")
        .some(draw => {
          const [amount, color] = draw.split(" ");
          return (CUBES.get(color)!! < Number(amount));
        })
      );

    sum += (!invalidGame ? Number(id) : 0);
  });

console.log(sum);
