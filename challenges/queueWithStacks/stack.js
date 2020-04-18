'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.isEmpty()) {
      this.top = newNode;
      return;
    };

    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()){
      throw 'NullReferenceException';
    }

    let currentTop = this.top;
    this.top = this.top.next;
    currentTop.next = null;

    return currentTop;
  }

  peek() {
    if (this.top) {
      return this.top.val;
    };

    throw 'NullReferenceException';
  }

  isEmpty(){
    if (this.top) {
      return false;
    };

    return true;
  }
}

module.exports = Stack;