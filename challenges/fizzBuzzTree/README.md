# FizzBuzz Tree

## Challenge
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

> Write a function called `FizzBuzzTree` which takes a tree as an argument.

Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

Return the new tree.


## Approach & Efficiency
This was really challenging to get my head around initially. Once Sonia demoed this in class and throughly explained it, I was able to write the function in a short, concise way while understanding it much better. This is a recursive solution, since we have a base case to return to with each running of the function. So, this solution's time and efficiency depends on how big the tree is. I'm guessing this is O(n) efficiency.

## Solution
![FizzBuzz Tree Whiteboard]()