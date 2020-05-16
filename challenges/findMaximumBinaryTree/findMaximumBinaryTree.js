'use strict';

let Node = require('../../data-structures/tree/tree.js').Node;

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue(root) {
    if (!root) return 'this tree is empty!';

    let bigNum = root.val;
    let leftMax, rightMax;

    if (root.left) {
      leftMax = this.findMaximumValue(root.left);
    }

    if (root.right) {
      rightMax = this.findMaximumValue(root.right);
    }

    if (leftMax > bigNum) bigNum = leftMax;
    if (rightMax > bigNum) bigNum = rightMax;

    return bigNum;
  }
}

module.exports = BinaryTree;