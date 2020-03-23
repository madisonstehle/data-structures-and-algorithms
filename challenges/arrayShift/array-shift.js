'use strict';

// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

let inputArrOne = [2,4,6,8];
let inputValOne = 5;

let inputArrTwo = [4,8,15,23,42];
let inputValTwo = 16;

const insertShiftArray = (arr, val) => {
  let newArr = [];
    for ( let i = 0; i <= Math.ceil(arr.length/2) ; i++ ){
      if (i !== Math.ceil(arr.length/2)){
        newArr[i] = arr[i];
      } else if (i === Math.ceil(arr.length/2)){
        newArr[i] = val;
        for ( let j = Math.ceil(arr.length/2) + 1; j <= arr.length ; j++ ){
          newArr[j] = arr[j - 1];
        }
      }
  }
  return newArr;
}

insertShiftArray(inputArrOne, inputValOne);
insertShiftArray(inputArrTwo, inputValTwo);

// outputOne = [ 2, 4, 5, 6, 8 ]
// outputTwo = [ 4, 8, 15, 16, 23, 42 ]
