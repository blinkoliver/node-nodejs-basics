import fs from "fs";
export const read = async () => {
  const file = fs.createReadStream("./files/fileToRead.txt");
  file.on("readable", () => {
    process.stdout.write(`readable: ${file.read()}`);
  });
};
read();
