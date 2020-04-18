'use strict';

// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception

const Queue = require('./queue.js');

describe('happy path', () => {
  it('can enqueue', () => {
    let queue = new Queue();
    queue.enqueue('a');

    expect(queue.front.val).toBe('a');
  });

  it('can enqueue multiple values', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.front.val).toBe('a');
    expect(queue.rear.val).toBe('c');
  });

  it('can dequeue', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();

    expect(queue.front.val).toBe('b');
    expect(queue.rear.val).toBe('c');
  });

  it('can peek', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');

    let response = queue.peek();

    expect(response).toBe('a');
  });

  it('can empty by dequeueing', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
  });

  it('can instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBe(true);
  });
});

describe('Expected Failure', () => {
  it('raises an exception when peek or dequeue is called on an empty queue', () => {
    let queue = new Queue();

    expect(() => {
      queue.peek();
    }).toThrow();
    
    expect(() => {
      queue.dequeue();
    }).toThrow();
  });
});