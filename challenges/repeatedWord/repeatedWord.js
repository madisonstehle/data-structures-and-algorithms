'use strict';

let HashTable = require('../../data-structures/hashtable/hashtable.js');

function hash(key, size) {
  let sum = 0;
  for (let i in key) sum += key.charAt(i);
  sum *= 599;

  return sum % size;
}

const repeatedWord = (str) => {
  let uniformStr = str.toLowerCase();
  let wordArr = uniformStr.split(/[., !?]/g);
  let hashtable = new Array(wordArr.length * 5);

  for (let i = 0; i < wordArr.length; i++) {
    let idx = hash(wordArr[i], hashtable.length);

    if (hashtable[idx]) {
      let item = hashtable[idx];

      while (item) {
        if (hashtable[idx].key === wordArr[i]) {
          return item.value;
        } 
        item = item.next;
      }

      hashtable[idx] = {key: wordArr[i], next: hashtable[idx]}

    } else {
      hashtable[idx] = {key: words[i]}
    }
  }
}


module.exports = repeatedWord;
