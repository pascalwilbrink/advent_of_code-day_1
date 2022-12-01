import { input } from "./input";

const res: number = input
  .split("\n\n")
  .map((res) => {
    return res
      .split("\n")
      .map((val) => Number(val))
      .reduce((a, b) => a + b);
  })
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log(res);
