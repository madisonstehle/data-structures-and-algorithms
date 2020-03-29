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

  if('head points at beginning of list', () => {
    let list = new LinkedList();
    let response = list.insert('b');

    expect(response.head.val).toBe('b');
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
  })
})