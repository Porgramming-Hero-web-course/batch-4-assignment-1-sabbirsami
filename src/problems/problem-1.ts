const sumArray = (numbers: number[]): number => {
  const total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return total;
};

const input = [1, 2, 3, 4, 5];

console.log(sumArray(input));
