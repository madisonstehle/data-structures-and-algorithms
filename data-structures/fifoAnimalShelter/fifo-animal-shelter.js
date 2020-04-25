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

  }
}

let shelter = new AnimalShelter();
shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');
