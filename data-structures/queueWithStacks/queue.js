'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    try {
      let newNode = new Node(val);

      if (this.isEmpty()){
        this.front = newNode;
        this.rear = newNode;
        return;
      }

      this.rear.next = newNode;
      this.rear = newNode;
    }
    catch(e) {
      console.error('ERROR ENQUEUING NODE', e);
    }
  }

  dequeue() {
    if (this.isEmpty()){
      throw 'NullReferenceException';
    }

    let currentFront = this.front;
    this.front = this.front.next;
    currentFront.next = null;
    return currentFront;
  }

  peek() {
    if (this.isEmpty()){
      throw 'NullReferenceException';
    }

    return this.front.val;
  }

  isEmpty(){
    if (this.front && this.rear) {
      return false;
    }

    return true;
  }
}


module.exports = Queue;
