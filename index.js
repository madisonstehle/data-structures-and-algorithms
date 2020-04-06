'use strict';

// ========== MODULES ==========
let linkedListContent = require('./data-structures/linkedList/linked-list.js');

// ========== CLASS ==========
let LinkedList = linkedListContent.LinkedList;

// ========== LINKED LIST CALLS ==========
// Create a list, insert items, find an item, print string, find an item k from the end
let list = new LinkedList();

list.insert('a');

list.append('b');
list.append('c');
list.append('d');

// list.insertBefore('c', 'z');
// list.insertBefore('i', 'z');
// list.insertBefore('a', 'w');

// list.insertAfter('b', 'q');
// list.insertAfter('d', 'j');
// list.insertAfter('v', 'm');

// list.includes('b');
// list.includes('x');

// list.kthFromEnd(2);
// list.kthFromEnd(7);
// list.kthFromEnd(4);
// list.kthFromEnd(1);

list.toString();
