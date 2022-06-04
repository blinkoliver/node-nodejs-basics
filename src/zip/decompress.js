import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
const pipe = promisify(pipeline);

export const decompress = async () => {
  try {
    const gunzip = createGunzip();
    const source = createReadStream("archive.gz");
    const destination = createWriteStream("./fileToCompress.txt");
    await pipe(source, gunzip, destination);
  } catch (error) {
    throw new Error(error);
  }
};
decompress();
