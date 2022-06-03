import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { URL } from "url";
import * as a from "./files/a.json" assert { type: "json" };
import * as b from "./files/b.json" assert { type: "json" };
import "./files/c.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${new URL("", import.meta.url).pathname}`);
console.log(
  `Path to current directory is ${new URL(".", import.meta.url).pathname}`
);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
export { unknownObject };
