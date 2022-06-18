const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

/**
 * Selection sort
 */
const selectionSort = (arr) => {
  const newArr = [];

  while (arr.length) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return newArr;
};

const result = selectionSort([5, 3, 6, 2, 10, 11, 1, 4]);
console.log("result:", result);
