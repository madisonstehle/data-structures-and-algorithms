'use strict';

// ========== MODULES ==========
let linkedListContent = require('./data-structures/linkedList/linked-list.js');

// ========== CLASS ==========
let LinkedList = linkedListContent.LinkedList

// Create a list, insert items, find an item, print string
let list = new LinkedList();

list.insert('a');

list.append('b');
list.append('c');

// list.includes('b');
// list.includes('f');
// list.includes('a');
// list.includes('j');

list.toString();