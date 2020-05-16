# Find Maximum Value - Binary Tree

## Challenge
Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.


## Approach & Efficiency
Because this isn't a sorted BST, I knew I would have to find the max value by traversing the entire tree. So, I assumed there would be a recursive solution where we would check against the max val of the subtrees. The part where I got stuck was figuring out how to compare values returned from those recursive calls. The time it takes to complete this function increases as the number of nodes on the tree increases, yet it only has to hit each node once, so I think the efficiency of this function is O(n)


## Solution
![Find Maxiumum Value Binary Tree Whiteboard]()
