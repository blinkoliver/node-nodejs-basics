export const parseArgs = () => {
  process.argv.map((el, i, arr) => {
    if (el.includes("--")) {
      console.log(`${el} is ${arr[i + 1]}`);
    }
  });
};
parseArgs();
