// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

console.log(
  (2n ** 1000n)
    .toString()
    .split("")
    .map((s) => BigInt(s))
    .reduce((acc, next) => acc + next, 0n)
);
