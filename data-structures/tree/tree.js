'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    // A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
  }

  inOrder() {
    // A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
  }

  postOrder() {
    // A function that traverses the tree using postOrder depth-first traver
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(val) {
    // A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
  }

  contains(val) {
    // A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree};