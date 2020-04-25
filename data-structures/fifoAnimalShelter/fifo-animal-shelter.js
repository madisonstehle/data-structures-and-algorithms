'use strict';

class Node {
  constructor(val){
    this.animal = val;
    this.next = null;
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(animal){
    let newAnimal = new Node(animal);

    if (!this.front && !this.rear) {
      this.front = newAnimal;
      this.rear = newAnimal;
      return;
    }

    this.rear.next = newAnimal;
    this.rear = newAnimal;
  }

  dequeue(pref){
    if (!this.front && !this.rear) return console.log('ERROR: List is Empty!');

    if (this.front.animal === pref){
      let dequeuedNode = this.front;
      this.front = this.front.next;
      dequeuedNode.next = null;
      return dequeuedNode;
    }

    let currentNode = this.front;
    let nextNode = this.front.next;
    let prevNode = null;

    while(currentNode.animal !== pref){
      prevNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    prevNode.next = nextNode;
    currentNode.next = null;
    return currentNode;
  }
}

let shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');

shelter.dequeue('dog');
shelter.dequeue('cat');