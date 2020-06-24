'use strict';

const HashTable = require('./hashtable.js');

describe('Happy Path', () => {
  const table = new HashTable(150);
  
  it('Adding a key/value to your hashtable', () => {
    table.add('hello', 'a greeting');
    expect(table.contains('hello')).toBe(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    let response = table.get('hello');
    expect(response).toBe('a greeting');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let response = table.get('laskjdgonwrg');
    expect(response).toBe(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    table.add('hhello', 'different thing');
    table.add('lehlo', 'different again thing');
    expect(table.contains('hello')).toBe(true);
    expect(table.contains('hhello')).toBe(true);
    expect(table.contains('lehlo')).toBe(true);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let response = table.get('lehlo');
    expect(response).toBe('different again thing');
  });

  it('Successfully hash a key to an in-range value', () => {
    let response = table.hash('sdljghasrgjzdvkjadgjsgsdgzgago');
    expect(response).toBeLessThan(150)
  });
});
