'use strict';

const mergeSort = require('./mergeSort.js');

describe('Happy Path', () => {
  it('unsorted array', () => {
    let response = mergeSort([8,4,23,42,16,15]);
    expect(response).toStrictEqual([4,8,15,16,23,42]);
  });

  it('reverse-sorted array', () => {
    let response = mergeSort([20,18,12,8,5,-2]);
    expect(response).toStrictEqual([-2,5,8,12,18,20]);
  });

  it('few uniques array', () => {
    let response = mergeSort([5,12,7,5,5,7]);
    expect(response).toStrictEqual([5,5,5,7,7,12]);
  });

  it('nearly-sorted array', () => {
    let response = mergeSort([2,3,5,7,13,11]);
    expect(response).toStrictEqual([2,3,5,7,11,13]);
  });
});

