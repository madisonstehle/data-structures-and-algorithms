'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    try {
      let newNode = new Node(value);

      newNode.next = this.head;
      this.head = newNode;

      return newNode;
    }
    catch(e) {
      console.error('ERROR INSERTING NODE');
    }
  }

  includes(searchVal) {
    try {
      let curVal = this.head;

      while (curVal) {
        if (curVal.val === searchVal) {
          console.log(true);
          return true;
        }
        else {
          curVal = curVal.next;
        }
      }

      console.log(false);
      return false;
    }
    catch(e) {
      console.error('ERROR FINDING VALUE');
    }
  }

  toString(){
    try {
      let curVal = this.head;
      let str = '';

      while (curVal) {
        str += `{ ${curVal.val} } -> `;
        curVal = curVal.next;
      }

      str += `NULL`;

      console.log(str);
      return str;
    }
    catch(e) {
      console.error('ERROR PRINTING LIST');
    }
  }

  append(value){
    try {
      let newNode = new Node(value);
      let currentNode = this.head;

      if(!currentNode) {
        this.insert(value);
        return;
      }

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;

      return newNode;
    }
    catch(e) {
      console.error('ERROR APPENDING NODE');
    }
  }

  insertBefore(targetValue, newVal){
    try {
      let newNode = new Node(newVal);
      let currentNode = this.head;

      if(currentNode.val === targetValue){
        newNode.next = this.head;
        this.head = newNode;
      }

      while(currentNode.next !== null){
        if (currentNode.next.val === targetValue) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        }
        else if (currentNode.next.val !== targetValue) {
          currentNode = currentNode.next;
        }
        else {
          console.log('that value doesn\'t exist in this list!');
          return false;
        }
      }

    }
    catch(e) {
      console.error(`ERROR INSERTING ${newVal} BEFORE ${targetValue}`);
    }
  }

  insertAfter(targetValue, newVal){
    try {
      let newNode = new Node(newVal);
      let currentNode = this.head;

      while(currentNode){
        if (currentNode.val === targetValue) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        }
        currentNode = currentNode.next;
      }

      console.log('that value doesn\'t exist in this list!');
    }
    catch(e){
      console.error(`ERROR INSERTING ${newVal} AFTER ${targetValue}`);
    }
  }

  kthFromEnd(k){
    if (k < 0) {
      let negMsg = '"k" must be a positive integer!';
      console.log(negMsg);
      return negMsg;
    }

    if (this.head === null) {
      console.log('This list is empty!');
      return;
    }

    let length = 1;
    let currentNode = this.head;

    while(currentNode !== null){
      length++;
      currentNode = currentNode.next;
    }

    if (length < k) {
      let lengthMsg = `This list is too short to print ${k} from the end!`;
      console.log(lengthMsg);
      return lengthMsg;
    }

    let bufferNode = this.head;
    let kNode = this.head;
    let bufferCount = k;

    while (bufferCount > 0) {
      bufferNode = bufferNode.next;
      bufferCount--;
    }

    while (bufferNode !== null) {
      bufferNode = bufferNode.next;
      kNode = kNode.next;
    }

    console.log(`the value ${k} from the end is ${kNode.val}`);
    return kNode.val;
  }
}

module.exports = { Node, LinkedList };
