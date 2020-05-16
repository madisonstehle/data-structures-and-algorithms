'use strict';

let Node = require('../../data-structures/tree/tree.js').Node;

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue() {
    let bigNum = this.root.val;

    if (this.root.left){
      
    }
      if (bigNum < ) 

    return bigNum;
  }
}

let tree = new BinaryTree();
tree.root = new Node(2);

tree.root.left = new Node(7);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.root.left.right.left = new Node(5);
tree.root.left.right.right = new Node(11);

tree.root.right = new Node(5);
tree.root.right.right = new Node(9);
tree.root.right.right.left = new Node(4);

tree.findMaximumValue();

module.exports = BinaryTree;