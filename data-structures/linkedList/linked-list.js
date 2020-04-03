'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
};

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
      console.error('ERROR INSERTING NODE')
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
      console.error('ERROR FINDING VALUE')
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
      console.error('ERROR PRINTING LIST')
    }
  }

  append(value){
    // which adds a new node with the given value to the end of the list
    try {
      let newNode = new Node(value);
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
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
      console.error(`ERROR INSERTING ${newVal} BEFORE ${targetVal}`);
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
      console.error(`ERROR INSERTING ${newVal} AFTER ${targetValue}`)
    }
  }
};

module.exports = { Node, LinkedList };
