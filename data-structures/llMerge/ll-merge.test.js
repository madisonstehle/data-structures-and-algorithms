'use strict';

let linkedListContent = require('../linkedList/linked-list.js');
let LinkedList = linkedListContent.LinkedList;
let mergeLists = require('./ll-merge.js');

describe('happy path', () => {
  it('to return the head of the new list', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();
    listOne.insert(1);
    listTwo.insert(2);
    
    listOne.append(3);
    listTwo.append(4);

    let response = mergeLists.mergeLists(listOne, listTwo);

    expect(response.val).toBe(1);
  });

  it('to zipper merge the lists', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();
    listOne.insert(1);
    listTwo.insert(2);
    
    listOne.append(3);
    listTwo.append(4);

    let response = mergeLists.mergeLists(listOne, listTwo);

    expect(response.val).toBe(1);
    expect(response.next.val).toBe(2);
    expect(response.next.next.val).toBe(3);
    expect(response.next.next.next.val).toBe(4);
    expect(response.next.next.next.next).toBeFalsy();
  });

  it('list1 is shorter than list2', () => {

  });

  it('list2 is shorter than list1', () => {

  })
})


describe('expected failures', () => {
  it('errors when given data that isn\'t a list', () => {
    let response = mergeLists.mergeLists(2, 1);

    expect(response).toBeFalsy();
  });

  it('either list1 or list2 is not a linked list', () => {

  });
})


describe('edge cases', () => {
  it('if given an empty list, returns the other list', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();
    listOne.insert(1);
    listOne.append(3);

    let response = mergeLists.mergeLists(listOne, listTwo);
    console.log(response)

    expect(response.head.val).toBe(1);
    expect(response.head.next.val).toBe(3);
  });

  it('list1 is very long, list2 is very short', () => {

  });

  it('list1 and list2 are equivalent', () => {

  });
})