import { readFile } from "fs/promises";
const { createHash } = await import("crypto");

export const calculateHash = async () => {
  try {
    const file = await readFile("./files/fileToCalculateHashFor.txt");
    const hashSum = createHash("sha256");
    hashSum.update(file);
    const hex = hashSum.digest("hex");
    console.log(hex);
  } catch (error) {
    throw new Error("file not read");
  }
};
calculateHash();
