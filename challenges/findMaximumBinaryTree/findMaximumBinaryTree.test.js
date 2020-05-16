'use strict';

let Node = require('../../data-structures/tree/tree.js').Node;
let BinaryTree = require('./findMaximumBinaryTree.js');

describe('Happy Path', () => {
  it('can find the max val if it\'s the root', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    let response = tree.findMaximumValue(tree.root);

    expect(response).toBe(7);
  });

  it('can find the max val if it\'s a leaf', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    let response = tree.findMaximumValue(tree.root);

    expect(response).toBe(5);
  });

  it('can find the max val if it\'s in the middle', () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(3);
    tree.root.right = new Node(9);
    tree.root.left.left = new Node(2);
    tree.root.right.right = new Node(5);

    let response = tree.findMaximumValue(tree.root);

    expect(response).toBe(9);
  });
});

describe('Expected Failure', () => {
  it('will return a string if tree is empty', () => {
    let tree = new BinaryTree();
    let response = tree.findMaximumValue(tree.root);

    expect(response).toBe('this tree is empty!');
  })
})