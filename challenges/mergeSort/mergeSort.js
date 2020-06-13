'use strict';

const mergeSort = (arr) => {
  console.log(arr);
  let n = arr.length;

  if (n > 1) {
    let mid = n/2;
    let left = [0, ...arr[mid]];
    let right = [mid, ...n];

    console.log('left', left);
    console.log('right', right)

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
}

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if (i = left.length){
    arr = [...arr, ...right];
  } else {
    arr = [...left, ...arr];
  }
}


let testArr = [8,4,23,42,16,15];

console.log(mergeSort(testArr));

module.exports = mergeSort;