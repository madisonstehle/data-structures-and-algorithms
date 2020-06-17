'use strict';

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);

    console.log('quicksort end', arr)
    return arr;
  };
};

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }

    swap(arr, right, low + 1)

    return low + 1;
  }
};

const swap = (arr, i, low) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

let testArray = [8,4,23,42,16,15];

quickSort(testArray);

console.log('final', testArray);

module.exports = quickSort;
