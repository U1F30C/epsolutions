// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

console.log(
  (
    [...Array(10000)]
      .map((_, i) => BigInt(i + 1))
      .reduce((acc, next) => {
        return acc + next ** next;
      }, 0n) %
    10n ** 10n
  )
    .toString()
    .padStart(10, "0")
);
