'use strict';

let linkedListContent = require('./linked-list.js');
let LinkedList = linkedListContent.LinkedList

// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

describe('Linked List Ops', () => {
  it('add a new list', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
  });

  it('add a new value', () => {
    let list = new LinkedList();
    let response = list.insert('b');

    expect(response.val).toBe('b');
  });

  it('head points at beginning of list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');

    expect(list.head.val).toBe('b');
  })

  it('find an existing value', () => {
    let list = new LinkedList();
    list.insert('b');
    let response = list.includes('b');

    expect(response).toBe(true);
  });

  it('print a list', () => {
    let list = new LinkedList();
    list.insert('b');
    let response = list.toString();

    expect(response).toBe('{ b } -> NULL');
  });

  it('add a node to the end', () => {
      let list = new LinkedList();
      list.insert('a');
      list.append('b');
      let response = list.append('c');

      expect(response.val).toBe('c');  
  });

  it('can add multiple nodes to the end', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');

    let response = list.toString();

    expect(response).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  it('insert a node before a node in the middle', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    list.insertBefore('b', 'z');

    let response = list.toString();
    expect(response).toBe('{ a } -> { z } -> { b } -> { c } -> NULL');
  });

  it('insert a node before the first node', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.insertBefore('a', 'z');

    expect(list.head.val).toBe('z');
  });

  it('insert after a node in the middle', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    list.insertAfter('b', 'z');

    let response = list.toString()
    expect(response).toBe('{ a } -> { b } -> { z } -> { c } -> NULL');
  });

  it('insert a node after the last node', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    list.insertAfter('c', 'z');

    let response = list.toString()
    expect(response).toBe('{ a } -> { b } -> { c } -> { z } -> NULL');
  })
})