'use strict';

let AnimalShelter = require('./fifo-animal-shelter.js');

jest.spyOn(global.console, 'log');
console.log = jest.fn();

describe('happy path', () => {
  it('can enqueue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');

    expect(shelter.front.animal && shelter.rear.animal).toBe('dog');
  });

  it('enqueue\'s to the rear', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');

    expect(shelter.rear.animal).toBe('cat');
  });

  it('can dequeue a specific node that is at the front', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    let response = shelter.dequeue('dog');

    expect(response.animal).toBe('dog');
    expect(response.next).toBe(null);
  });

  it('can dequeue a node that is not at the front', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    let response = shelter.dequeue('cat');

    expect(response.animal).toBe('cat');
    expect(response.next).toBe(null);
  });
});

describe('expected failure', () => {
  it('console logs an error if pref parameter in dequeue does not exist', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.dequeue('bird');

    expect(console.log).toHaveBeenCalled();
  });

  it('console logs an error if tries to dequeue an empty list', () => {
    let shelter = new AnimalShelter();
    shelter.dequeue('dog');

    expect(console.log).toHaveBeenCalled();
  });
})