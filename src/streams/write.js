import fs from "fs";
import { stdin } from "process";
stdin.resume();
export const write = async () => {
  const ws = fs.createWriteStream("./files/fileToWrite.txt");
  process.stdin.on("data", (data) => {
    ws.write(data);
  });
};

write();
