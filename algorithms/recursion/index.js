const sum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const firstItem = arr[0];
  return firstItem + sum(arr.slice(1));
};

const sumResult = sum([5, 4, 6, 2, 10]);

const count = (arr) => {
  if (arr.length === 1) {
    return 1;
  }

  return 1 + count(arr.slice(1));
};

const countResult = count([1, 4, 6, 2, 10]);

const maxNumber = (arr) => {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  const nextNumber = maxNumber(arr.slice(1));
  return arr[0] > nextNumber ? arr[0] : nextNumber;
};

const maxNumberResult = maxNumber([1, 4, 16, 2, 10]);
console.log("result:", maxNumberResult);
