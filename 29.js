const index = {};
for (let a = 2n; a <= 100n; a++)
  for (let b = 2n; b <= 100n; b++) {
    index[(a ** b).toString()] = undefined;
  }
console.log(Object.keys(index).length);
