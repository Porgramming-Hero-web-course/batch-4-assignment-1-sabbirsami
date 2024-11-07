const removeDuplicates = (numbers: number[]): number[] => {
  const removeDuplicatesArray = [...new Set(numbers)];
  return removeDuplicatesArray;
};

const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(duplicatesArray));
