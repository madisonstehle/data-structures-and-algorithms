# Stacks & Queues
    
## Links
- [Submission PR]()


## Challenge
In this file, your task will be to create three classes, Node, BinaryTree and BinarySearchTree. All three should be exported by this file.

Your Node class should have the following properties:
- `val` - The value stored in the Node
- `left` - A pointer the left child Node in the tree
- `right` - A pointer to the right child Node in the tree

Your BinaryTree class should have the following properties:
- `root` - The `Node` that represents the root of the tree

Your BinaryTree class should have the following functions/methods:
- `preOrder()` - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
- `inOrder()` - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
- `postOrder()` - A function that traverses the tree using postOrder depth-first traver

This class may extend or inherit from the BinaryTree class.

Your BinarySearchTree class should have the following properties:
- `root` - The Node that represents the root of the tree

Your BinarySearchTree class should have the following functions/methods:
- `add(val)` - A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
- `contains(val)` - A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not


## Credits
- [Binary Search Tree Video](https://www.youtube.com/watch?v=bmaeYtlO2OE)
- [BST Add Method Notes](https://dev.to/thevenicelive/binary-tree-in-javascript-2n92)
- [BST- Tree Traversal in JavaScript](https://medium.com/@1991dharapatel/bst-tree-traversal-in-javascript-1182e7dc9867)
- [Binary Tree Video](https://www.youtube.com/watch?v=zm83jPHZ-jA&list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu&index=3&t=0s)


## Testing
 - Run test files: `npm test tree.test.js`
 - Run linter: `npm run lint`
