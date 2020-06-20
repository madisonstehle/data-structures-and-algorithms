'use strict';

const Node = require('../../data-structures/tree/tree.js').Node;
const Queue = require('../../data-structures/queueWithStacks/queue.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(root) {
    if (!root) return false;

    let nodeArray = [];

    let queue = new Queue();
    queue.enqueue(root);

    
    while (!queue.isEmpty()) {
      console.log('====== WHILE ======');
      console.log('QUEUE: ', queue);
      
      nodeArray.push(queue.dequeue().val);
      
      if (root.left) queue.enqueue(root.left);
      if (root.right) queue.enqueue(root.right);
    }
    console.log(nodeArray);

    return nodeArray;
  }
}

let myTree = new BinaryTree();
myTree.root = new Node(5);
myTree.root.left = new Node(3);
myTree.root.right = new Node(7);
myTree.root.left.left = new Node(2);
myTree.root.left.right = new Node(4);
myTree.root.right.left = new Node(6);
myTree.root.right.right = new Node(8);

myTree.breadthFirst(myTree.root);

module.exports = BinaryTree;