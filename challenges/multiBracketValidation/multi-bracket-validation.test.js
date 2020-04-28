'use strict';

let multiBracketValidation = require('./multi-bracket-validation.js');

describe('happy path', () => {
  it('validate a pair of brackets', () => {
    let response = multiBracketValidation('{}');

    expect(response).toBe(true);
  });

  it('validate multiple pairs of brackets', () => {
    let response = multiBracketValidation('{}(){}');

    expect(response).toBe(true);
  });

  it('validate brackets with other characters nested', () => {
    let response = multiBracketValidation('()[[Extra Characters]]');

    expect(response).toBe(true);
  });

  it('validate nested brackets', () => {
    let response = multiBracketValidation('(){}[[]]');

    expect(response).toBe(true);
  });

  it('validate multiple other characters within different sets of paired brackets', () => {
    let response = multiBracketValidation('{}{Code}[Fellows](())');

    expect(response).toBe(true);
  });
});

describe('expected failure', () => {
  it('invalid: no closing (', () => {
    let response = multiBracketValidation('[({}]');

    expect(response).toBe(false);
  });

  it('invalid: no matching brackets', () => {
    let response = multiBracketValidation('(](');

    expect(response).toBe(false);
  });
});

describe('edge cases', () => {
  it('validate a string with no brackets as true', () => {
    let response = multiBracketValidation('sdfjgobnwoij2498dfj');

    expect(response).toBe(true);
  });
});
