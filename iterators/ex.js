var numbers = {
  *[Symbol.iterator]({ start = 1, end = 100, step = 1 } = {}) {
    for (start; start <= end; start += step) {
      yield start;
    }
  },
};

for (let num of numbers) {
  console.log(num);
}

console.log(
  `My lucky numbers are ${[
    ...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 }),
  ]}`
);
