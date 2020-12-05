import { readFile } from "../readFile";

const threeSum = (list: number[], matchSum: number): number => {
    for (let i = 0; i < list.length - 2; i++) {
        if (i != 0 && list[i] == list[i - 1]) continue;
        let j = i + 1,
            k = list.length - 1;

        while (j < k) {
            if (list[i] + list[j] + list[k] === matchSum) {
                return list[i] * list[j] * list[k];
            } else if (list[i] + list[j] + list[k] < matchSum) {
                ++j;
            } else {
                --k;
            }
        }
    }

    return -1;
};

const twoSum = (list: number[], matchSum: number): number => {
    let i = 0,
        j = list.length - 1;

    while (i < j) {
        if (list[i] + list[j] === matchSum) {
            return list[i] * list[j];
        } else if (list[i] + list[j] < matchSum) {
            i++;
        } else {
            j--;
        }
    }

    return -1;
};

const main = () => {
    const input = readFile(`${__dirname}/input.txt`);

    const expenseList = input
        .split(/\r?\n/)
        .map(expense => Number(expense))
        .sort((a, b) => a - b);

    // Part One
    console.log(twoSum(expenseList, 2020));
    //Part Two
    console.log(threeSum(expenseList, 2020));
};

main();
