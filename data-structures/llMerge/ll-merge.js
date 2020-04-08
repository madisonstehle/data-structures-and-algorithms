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

// ========== FUNCTION ==========
function mergeLists(list1, list2){
  try {
    if(!list1) return list2;
    if(!list2) return list1;  

    let zippedList = new LinkedList();

    let currentZipNode = zippedList.head;
    let currentNodeOne = list1.head;
    let currentNodeTwo = list2.head;

    while (currentNodeOne || currentNodeTwo) {
      console.log('================================')
      console.log('ONE val', currentNodeOne.val);
      console.log('TWO val', currentNodeTwo.val);
      console.log('CURRENT ZIP NODE', currentZipNode)

      let newNode1 = new Node(currentNodeOne.val); 

      if(zippedList.head === null){
        currentZipNode = newNode1; 
        zippedList.head = newNode1;
        currentZipNode.next = new Node(currentNodeTwo.val);
      } else {
        newNode1.next = new Node(currentNodeTwo.val);
        currentZipNode.next = newNode1; 
      }

      currentZipNode = currentZipNode.next; 
      currentNodeOne = currentNodeOne.next;
      currentNodeTwo = currentNodeTwo.next;

    }
    zippedList.toString();
    return zippedList.head;
  }
  catch(e) {
    console.error('ERROR ZIPPING LISTS');
  }
}

// ========== CALL THE FUNCTION ==========
mergeLists(listOne, listTwo);
