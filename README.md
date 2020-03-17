# Data Structures and Algorithms
Code Fellows 301n16 & 401n16

## Table of Contents

### 401 Code Challenges
- [Reverse an Array](./challenges/arrayReverse/array-reverse.js)
  - **Challenge**: Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
  - **Approach & Efficiency**: The challenge to not use array methods was really difficult. I wanted so badly just to use `.push()`. I started my approach by thinking about what values I needed to capture and where those values needed to go. I knew I would need to loop over the original array. The decision I had to make was either to make a new array or to modify the array in-place. I decided to create a new array so that the original array could still be used elsewhere if needed. [This article](https://medium.com/@josephcardillo/how-to-reverse-arrays-in-javascript-without-using-reverse-ae995904efbe) helped me with theory and [this entry](https://stackoverflow.com/questions/50999847/reverse-array-with-for-loops) helped me syntatically. I didn't know you could do so much within the parameters of a `for` loop until I read over those responses. I don't know anything about efficiency yet.
  - **Solution**: ![Reversed Array Whiteboard](assets/whiteboard-reverse-array.PNG)