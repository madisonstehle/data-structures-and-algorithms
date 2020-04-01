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

  append(){
    // which adds a new node with the given value to the end of the list
  }

  insertBefore(value, newVal){
    // which add a new node with the given newValue immediately before the first value node
  }

  insertAfter(value, newVal){
    // which add a new node with the given newValue immediately after the first value node
  }
};

module.exports = { Node, LinkedList };
