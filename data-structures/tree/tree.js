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

  preOrder(root) {
    let tempArr = []; 

    tempArr.push(root.val); 

    if (root.left) {
      tempArr = [...tempArr, ...this.preOrder(root.left)]
    }

    if (root.right){
      tempArr = [...tempArr, ...this.preOrder(root.right)];
    }

    return tempArr;
  }

  inOrder(root) {
    let tempArr = [];
    
    if (root.left) {
      tempArr = [...tempArr, ...this.inOrder(root.left)]
    }  
  
    tempArr.push(root.val); 

    if (root.right){
       tempArr = [...tempArr, ...this.inOrder(root.right)];
    }

    return tempArr;
  }

  postOrder(root) {
    let tempArr = [];
    
    if (root.left) {
      tempArr = [...tempArr, ...this.postOrder(root.left)]
    }  
  
    if (root.right){
       tempArr = [...tempArr, ...this.postOrder(root.right)];
    }
    
    tempArr.push(root.val); 

    return tempArr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while(currentNode){
        if (newNode.val < currentNode.val) {

          if (!currentNode.left){
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.val > currentNode.val) {

          if (!currentNode.right){
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Sorry, that value doesn\'nt work!');
          break;
        }
      }
    }
  }

  contains(num, node) {
    let currentNode = node;

    if (currentNode.val === num) return true;

    if (currentNode.val > num && currentNode.left) {
      currentNode = currentNode.left;
      return this.contains(num, currentNode);
    }

    if (currentNode.val < num && currentNode.right){
      currentNode = currentNode.right;
      return this.contains(num, currentNode);
    }

    if(!currentNode.left && !currentNode.right) return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };