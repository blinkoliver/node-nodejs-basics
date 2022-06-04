import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
const pipe = promisify(pipeline);

export const compress = async () => {
  try {
    const gzip = createGzip();
    const source = createReadStream("./files/fileToCompress.txt");
    const destination = createWriteStream("archive.gz");
    await pipe(source, gzip, destination);
  } catch (error) {
    throw new Error(error);
  }
};

compress();
