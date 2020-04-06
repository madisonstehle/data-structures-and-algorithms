'use strict';

let linkedListContent = require('./linked-list.js');
let LinkedList = linkedListContent.LinkedList


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
  });

  it('k is greater than the length of the list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    let response = list.kthFromEnd(7);

    expect(response).toBe('This list is too short to print 7 from the end!');
  });

  it('k and the length of list are the same', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    let response = list.kthFromEnd(3);

    expect(response).toBe('a');
  });

  it('k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    let response = list.kthFromEnd(-2);

    expect(response).toBe('"k" must be a positive integer!');
  });

  it('the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert('a');
    let response = list.kthFromEnd(1);

    expect(response).toBe('a');
  });

  it('k is somewhere in the middle of the list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    list.append('d');
    let response = list.kthFromEnd(2);

    expect(response).toBe('c');
  })
})