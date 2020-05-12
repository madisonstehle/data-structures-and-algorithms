'use strict';

let tree = require('../../data-structures/tree/tree.js');


const FizzBuzzTree = (root) => {
  let newVal = '';

  if ( root.val % 3 === 0 ) newVal += 'Fizz';
  if ( root.val % 5 === 0 ) newVal += 'Buzz'; 

  let newTreeRoot = new tree.Node( newVal ? newVal : `${root.val}` );

  if ( root.left ) {
    newTreeRoot.left = FizzBuzzTree(root.left);
  }
  if ( root.right ) {
    newTreeRoot.right = FizzBuzzTree(root.right);
  }

  return newTreeRoot;
}

module.exports = FizzBuzzTree;
