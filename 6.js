console.log(
  [...Array(100)]
    .map((_, i) => BigInt(i + 1))
    .reduce((acc, next) => {
      return acc + next;
    }, 0n) **
    2n -
    [...Array(100)]
      .map((_, i) => BigInt(i + 1))
      .reduce((acc, next) => {
        return acc + next ** 2n;
      }, 0n)
);
