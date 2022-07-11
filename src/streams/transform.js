import { Transform, pipeline } from "stream";
import { stdin, stdout } from "process";

stdin.resume();
export const transform = async () => {
  const transformation = new Transform({
    transform(chunk, encoding, cb) {
      const chunkString = chunk.toString().trim();
      const reverseChunkString = chunkString.split("").reverse().join("");
      this.push(reverseChunkString);
      cb();
    },
  });
  pipeline(stdin, transformation, stdout, (err) => console.log(err));
};

transform();
