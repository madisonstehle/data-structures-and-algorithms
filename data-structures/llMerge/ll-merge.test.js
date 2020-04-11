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
  })
})


describe('expected failures', () => {

})


describe('edge cases', () => {

})