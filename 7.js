let n = 0,
  i = 1;
while (n < 10001) {
  i++;
  if (isPrime(i)) {
    n++;
  }
}
console.log(i);

function isPrime(n) {
  if (n == 2 || n == 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
