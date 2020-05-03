'use strict';

const Tree = require('./tree.js');
const BinarySearchTree = Tree.BinarySearchTree;

describe('Happy Path', () => {
  it('instantiate an empty tree', () => {
    let myTree = new BinarySearchTree();

    expect(myTree).toBeDefined();
  });

  it('instantiate a tree and add a single root node', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);

    expect(myTree.root.val).toBe(5);
  });

  it('add a left and right child to a single root node', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);

    expect(myTree.root.val).toBe(5);
    expect(myTree.root.left.val).toBe(3);
    expect(myTree.root.right.val).toBe(8);
  });

  it('do a preOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);
    let response = myTree.preOrder(myTree.root);

    expect(response).toStrictEqual([5, 3, 8]);
  });

  it('do an inOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);
    let response = myTree.inOrder(myTree.root);

    expect(response).toStrictEqual([3, 5, 8]);
  });

  it('do a postOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);
    let response = myTree.postOrder(myTree.root);

    expect(response).toStrictEqual([3, 8, 5]);
  });

  it('add a value to a binary search tree', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);
    myTree.add(7);
    
    expect(myTree.root.right.left.val).toBe(7);
  });

  it('search a binary search tree for a value and get the correct true/false result', () => {
    let myTree = new BinarySearchTree();
    myTree.add(5);
    myTree.add(3);
    myTree.add(8);

    let responseOne = myTree.contains(5, myTree.root);
    let responseTwo = myTree.contains(3, myTree.root);
    let responseThree = myTree.contains(3, myTree.root);
    let responseFour = myTree.contains(25, myTree.root);

    expect(responseOne).toBeTruthy();
    expect(responseTwo).toBeTruthy();
    expect(responseThree).toBeTruthy();
    expect(responseFour).toBeFalsy();
  });
});