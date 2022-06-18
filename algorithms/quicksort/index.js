const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const biggerThanPivot = arr.filter((item) => item > pivot);
  const smallerThanPivot = arr.filter((item) => item < pivot);
  return [...quicksort(smallerThanPivot), pivot, ...quicksort(biggerThanPivot)];
};

const quicksortResult = quicksort([5, 4, 6, 2, 10, 8, 7]);
console.log("result:", quicksortResult);
