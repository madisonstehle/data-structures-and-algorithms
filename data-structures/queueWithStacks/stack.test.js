'use strict';

const Stack = require('./stack.js');

describe('Happy Path', () => {
  it('can push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe('a');
  });

  it('can push multiple nodes onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe('c');
  });

  it('can pop from a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe('b');

    let popNode = stack.pop();

    expect(popNode.val).toBe('b');
  });

  it('can peek the top node', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
  });
});

describe('Expected Failure', () => {
  it('raises an exception when peek or pop is called on an empty stack', () => {
    let stack = new Stack();

    expect(() => {
      stack.pop();
    }).toThrow();

    expect(() => {
      stack.peek();
    }).toThrow();
  });
});
