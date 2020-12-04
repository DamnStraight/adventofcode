import fs from "fs";


export const readFile = (filePath: string): string =>
    fs.readFileSync(filePath, { encoding: "utf-8" });
