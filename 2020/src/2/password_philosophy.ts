import { readFile } from "../readFile";

const lineRegex = /^(\d+)-(\d+) (\w): (\w+)$/;

interface PasswordPolicy {
    min: number;
    max: number;
    character: string;
    password: string;
}

const toPasswordPolicy = (rawString: string): PasswordPolicy => {
    const [, min, max, character, password] = rawString.match(lineRegex) ?? [];

    return {
        min: parseInt(min),
        max: parseInt(max),
        character,
        password,
    } as PasswordPolicy;
};

const authenticatePolicy = (passwordList: string[]): number =>
    passwordList
        .map(toPasswordPolicy)
        .filter(({ min, max, character, password }) => {
            const charCount = (password.match(RegExp(character, "g")) ?? [])
                .length;
            return min <= charCount && max >= charCount;
        }).length;

const main = () => {
    const input: string = readFile(`${__dirname}/input.txt`);

    const passwords: string[] = input.split(/\r?\n/);

    console.log(authenticatePolicy(passwords));
};

main();
