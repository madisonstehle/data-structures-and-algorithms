'use strict';

let tree = require('../../data-structures/tree/tree.js');
let FizzBuzzTree = require('./fizz-buzz-tree.js');

describe('happy path', () => {
  it('if the number is divisible by 3, replace with Fizz', () => {
    let testTree = new tree.BinarySearchTree();
    testTree.add(3);
    let response = FizzBuzzTree(testTree.root);

    expect(response.val).toBe('Fizz');
  });

  it('if the number is divisible by 5, replace with Buzz', () => {
    let testTree = new tree.BinarySearchTree();
    testTree.add(5);
    let response = FizzBuzzTree(testTree.root);
    
    expect(response.val).toBe('Buzz');
  });

  it('if the number is divisible by 3 & 5, replace with FizzBuzz', () => {
    let testTree = new tree.BinarySearchTree();
    testTree.add(15);
    let response = FizzBuzzTree(testTree.root);
    
    expect(response.val).toBe('FizzBuzz');
  });

  it('if the number not divisible by 3 or 5, return the value as a string', () => {
    let testTree = new tree.BinarySearchTree();
    testTree.add(8);
    let response = FizzBuzzTree(testTree.root);

    expect(response.val).toBe('8');
  });
});

describe('Edge Cases', () => {
  it('if the input is not a number, will return the value as a string still', () => {
    let testTree = new tree.BinarySearchTree();
    testTree.add('not a number');
    let response = FizzBuzzTree(testTree.root);

    expect(response.val).toBe('not a number');
  });
});