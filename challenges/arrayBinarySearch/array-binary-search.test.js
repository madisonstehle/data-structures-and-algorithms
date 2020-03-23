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

// ========== Expected Failures ==========
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

  it('null search input will throw an error', () => {
    expect( () => {
      BinarySearch(goodInputArrayExists, nullInput);
    }).toThrow();
  });
  
})
