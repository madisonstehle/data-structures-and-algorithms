# Hash Tables


## Links
- [Submission PR](https://github.com/madisonstehle/data-structures-and-algorithms/pull/50)


## Challenge
Implement a Hashtable with the following methods:

- `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- `get`: takes in the key and returns the value from the table.
- `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
- `hash`: takes in an arbitrary key and returns an index in the collection.


## Approach & Efficiency
Most operations of a Hash Table are O(1).


## Credits
- [Hash Tables in Plain English](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)


## Testing
 - Run test files: `npm test hashtable.test.js`
