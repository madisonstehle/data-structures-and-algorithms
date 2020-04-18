'use strict';

// ========== MODULES ==========
let linkedListContent = require('../linkedList/linked-list.js');

// ========== CLASSES ==========
let LinkedList = linkedListContent.LinkedList;
let Node = linkedListContent.Node;

// ========== CREATE DUMMY DATA ==========
let listOne = new LinkedList();
let listTwo = new LinkedList();
listOne.insert(1);
listTwo.insert(2);

listOne.append(3);
listTwo.append(4);

listOne.append(5);
listTwo.append(6);

// ========== FUNCTION ==========
const mergeLists = function(list1, list2){
  try {
    if(!list1.head && !list2.head) return null;
    if(!list1.head) return list2;
    if(!list2.head) return list1;

    let zippedList = new LinkedList();

    let currentZipNode = zippedList.head;
    let currentNodeOne = list1.head;
    let currentNodeTwo = list2.head;

    while (currentNodeOne || currentNodeTwo) {

      if (currentNodeOne) {
        if (!zippedList.head) {
          let newNode = new Node(currentNodeOne.val);
          currentZipNode = newNode;
          zippedList.head = newNode;
        } else {
          currentZipNode.next = currentNodeOne;
          currentZipNode = currentZipNode.next;
        }
        currentNodeOne = currentNodeOne.next;
      }

      if (currentNodeTwo) {
        if (!zippedList.head) {
          let newNode = new Node(currentNodeTwo.val);
          currentZipNode = newNode;
          zippedList.head = newNode;
        } else {
          currentZipNode.next = currentNodeTwo;
          currentZipNode = currentZipNode.next;
        }
        currentNodeTwo = currentNodeTwo.next;
      }

    }
    return zippedList.head;
  }
  catch(e) {
    console.error('ERROR ZIPPING LISTS');
  }
};

// ========== CALL THE FUNCTION ==========
// mergeLists(listOne, listTwo);


module.exports = { mergeLists: mergeLists};

