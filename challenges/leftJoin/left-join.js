'use strict';

const Hashtable = require('../../data-structures/hashtable/hashtable.js');

let table01 = new Hashtable(150);
table01.add('fond', 'enamored');
table01.add('wrath', 'angry');
table01.add('diligent', 'employed');
table01.add('outfit', 'garb');

let table02 = new Hashtable(150);
table02.add('fond', 'averse');
table02.add('wrath', 'delight');
table02.add('diligent', 'idle');
table02.add('outfit', 'follow');

function hash(key, tableSize) {
  const H = 599;
  let total = 0;

  for (var i = 0; i< key.length; i++) {
    total += H * (total + key.charCodeAt(i));
  }

  total %= tableSize;

  if (total < 1) {
    this.table.length -1
  }

  return parseInt(total);
};

const leftJoin = (synMap, antMap) => {
  for (let i=0; i< antMap.length; i++) {
    if ( !antMap[i] ) {
      continue;
    } else if ( antMap[i].length ) {
      let rEntry = antMap[i];
      let key = rEntry[0];
      let value = rEntry[1];

      let idx = hash(key, synMap.length);
      let lEntry = synMap[idx];

      if (!lEntry) {
        synMap[idx] = [key, null, value];
      } else if (lEntry.length) {
        synMap[idx].push(value);
      } else if (lEntry.next) {
        let current = lEntry.prev;

        while(current) {
          if (current[0] === key) {
            current.push(value);
            break;
          }
          current = current.next;
        }
      }

    }
  }
  return synMap;
}

console.log(leftJoin(table01, table02));

module.exports = leftJoin;
