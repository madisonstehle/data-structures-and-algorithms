'use strict';


class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.values = [];
  }

  add(key, value) {
    let addIdx = this.hash(key);

    if (this.table[addIdx]) {
      let current = this.table[addIdx];

      while(current.next) {
        if (current.key === key) {
          if (current.val.length) {
            current.val.push(value);
          } else {
            current.val = [current.val, value];
          }
          return;
        }
        current = current.next;
      }

      current.next = {
        key: key,
        val: value
      }
    } else {
      this.table[addIdx] = {
        key: key,
        val: value
      }
    }
    

  }

  get(key) {
    let idx = this.hash(key);

    if (this.table[idx]) {
      let current = this.table[idx];

      while (current) {
        if (current.key === key) {
          return current.val;
        } 
        current = current.next;
      } 
    }

    return null;
  }

  contains(key) {
    let val = this.get(key);

    if (!val) return false;
    else return true;
  }

  hash(key) {
    const H = 599;
    let total = 0;

    for (var i = 0; i< key.length; i++) {
      total += H * (total + key.charCodeAt(i));
    }

    total %= this.table.length;

    if (total <1) {
      this.table.length -1
    }

    return parseInt(total);
  }
};


module.exports = HashTable;
