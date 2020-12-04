import { readFile } from "../readFile";

const traverseMap = (dx: number, dy: number, map: string[]): number => {
    let position = dx,
        collisions = 0;

    for (let mapY = dy; mapY < map.length; mapY += dy) {
        const line = map[mapY];

        if (position > line.length - 1) {
            position = position % line.length;
        }

        collisions += line.charAt(position) === "#" ? 1 : 0;

        position += dx;
    }

    return collisions;
};

const main = () => {
    const input = readFile(`${__dirname}/input.txt`);
    const map: string[] = input.split(/\r?\n/);

    const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ];

    const results: number[] = [];

    for (const [dx, dy] of slopes) {
        results.push(traverseMap(dx, dy, map));
    }

    console.log(
        results.reduce((accumulator, current) => accumulator * current)
    );
};

main();
