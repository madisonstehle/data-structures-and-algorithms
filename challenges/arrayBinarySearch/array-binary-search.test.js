'use strict';

const BinarySearch = require('./array-binary-search.js');

// ========== Happy Paths ==========
let goodInputArrayExists = [4,8,15,16,23,42];
let goodInputValueExists = 15;
let expectedGoodResultExists = 2;

let goodInputArrayNotExists = [11,22,33,44,55,66,77];
let goodInputValueNotExists = 90;
let expectedGoodResultNotExists = -1;


describe('handling good input', () => {
  it( 'good input where search value is present', () => {
    expect(BinarySearch(goodInputArrayExists, goodInputValueExists)).toBe(expectedGoodResultExists);
  });

  it( 'good input where search value is not present', () => {
    expect(BinarySearch(goodInputArrayNotExists, goodInputValueNotExists)).toBe(expectedGoodResultNotExists);
  });
})

// ========== Expected Failures & Edge Cases ==========
let unsortedArray = [1, 2, 9, 8, 90, 13, 4, 20];
let nullInput = null;
let emptyArray = [];
let stringInput = '';
let negativeNumber = -1;

describe( 'expected failures', () => {
  it('unsorted array input will not always find the value', () => {
    expect(BinarySearch(unsortedArray, goodInputValueNotExists)).toBe(-1);
  });

  it('null array input will throw an error', () => {
    expect( () => {
      BinarySearch(nullInput, goodInputValueExists);
    }).toThrow();
  });
  
  it('empty array input will be -1', () => {
    expect(BinarySearch(emptyArray, goodInputValueNotExists)).toBe(-1);
  });

});


describe('edge cases', () => {
  it('string input does not break it', () => {
    expect(BinarySearch(stringInput, goodInputValueExists)).toBe(-1);
  });

  it('negative number inputs do not break it', () => {
    expect(BinarySearch(negativeNumber, goodInputValueExists)).toBe(-1);
  });
})