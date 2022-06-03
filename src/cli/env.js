export const parseEnv = () => {
  process.env.RSS_school = "value1";
  process.env.RSS_app = "value2";
  Object.keys(process.env).map((el) => {
    if (el.includes("RSS_")) {
      console.log(`${el}=${process.env[el]}`);
    }
  });
};
parseEnv();
