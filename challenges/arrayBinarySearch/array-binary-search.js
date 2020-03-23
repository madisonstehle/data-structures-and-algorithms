'use strict';

// Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

let InputArrayOne = [4,8,15,16,23,42];
let InputSearchOne = 15;

let InputArrayTwo = [11,22,33,44,55,66,77];
let InputSearchTwo = 90;

function BinarySearch(array, searchVal) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while ( startIndex <= endIndex ) {
    let middleIndex = Math.floor((startIndex + endIndex)/2);

    if ( array[middleIndex] === searchVal ) {
      return middleIndex;
    } else if ( array[middleIndex] < searchVal ) {
      startIndex = middleIndex + 1;
    } else if ( array[middleIndex] > searchVal) {
      startIndex = middleIndex - 1;
    }
  }
  return -1;
};

BinarySearch(InputArrayOne, InputSearchOne);
BinarySearch(InputArrayTwo, InputSearchTwo);

// outputOne = 2;
// outputTwo = -1;