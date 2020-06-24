'use strict';


class HashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
  }

  hash(string) {
    const H = 37;
    let total = 0;
    for (var i = 0; i< string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total <1) {
      this.table.length -1
    }
    return parseInt(total);
  }

  add(key, value) {
    const pos = this.hash(key);
    this.table[pos] = {key: value};
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] !=  key){
      if(this.table[pos][index] !== undefined){
        return this.table[pos][index]
      } else return undefined; 
    }
    index ++
  }

};


module.exports = HashTable;
