'use strict';

const mergeSort = (arr) => {
  let n = arr.length;

  if ( n < 2 ) return arr;

  let mid = Math.ceil( n/2 );

  let left = [];
  for ( let i = 0; i < mid; i++ ) {
    left.push(arr[i]);
  }

  let right = [];
  for ( let i = mid; i < arr.length; i++ ) {
    right.push(arr[i]);
  }

  mergeSort(left);
  console.log('left', left)
  mergeSort(right);
  console.log('right', right)

  merge(left, right, arr);

  return arr;
}

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log('left:', left, 'right:', right, 'full:', arr);

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while ( i < left.length ) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while ( j < right.length ) {
    arr[k] = right[j];
    j++;
    k++;
  }

}

let testArray = [19, 4, -3, 2, 11];

mergeSort(testArray)

console.log('END', testArray)

module.exports = mergeSort;
