import { input } from "./input";

const res: number = Math.max(
  ...input.split("\n\n").map((res) => {
    return res
      .split("\n")
      .map((val) => Number(val))
      .reduce((a, b) => a + b);
  })
);

console.log(res);
