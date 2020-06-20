# Insertion Sort

> Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article.

### See working code [here](./mergeSort.js).

## Pseudocode
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Walkthrough

The psuedocode for this challenge was a little daunting, so I found [this article](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060) that talked about merge sort. 

Merge sort is a sorting algorithm that breaks down an array into smaller and smaller units, then merges them all together at the end by comparing individual "arrays"  of single values. This is done by having a recursive `mergeSort` function that breaks down the array, and then calling a secondary `merge` function to compare the values and re-form the array. In the pseudocode above, we will be modifying the initial array in place.

Let's have an example array of [19, 4, -3, 2, 11] for this walkthrough. At the end, we know we should have a final, sorted array of [-3, 2, 4, 11, 19].

Entering `mergeSort` function with a argument of our test array, we first will find the length of the array and check that it is an array with more than one value - because if there's only one value, then the array is _already sorted_ and we can just return and stop the function there.

```js
  let n = arr.length;

  if ( n < 2 ) return arr;
```

Once we've done that initial check, we can move on to the bulk of the `mergeSort` function: breaking down our array.

This algorithm breaks down the array by continually _halving it_ until it can no longer be halved into whole units. To break our array into halves, we can find the midpoint of the array (rounding up or down, in case there are an even number of indices), and then split the array into `left` and `right` sides.

First, find the midpoint: `let mid = Math.ceil(n/2)`. Here, we chose to round up. In our example array, this will read as `Math.ceil(5/2)`, so our `mid` will be `-3`.

Then, we will need to define our `left` array and our `right` array. Because we rounded up when finding the midpoint earlier, let's include the `mid` in the `right` array. We can fill our `left` and `right` arrays by looping over the initial array and pushing the values into these new arrays. 

The only differences between these loops is at which index in the inital array we start and stop pushing values and which array we are pushing those values into. For the `left` array, we can start at the first index in the initial array and loop until (but not through) the `mid`. For the `right` array, we can start at the `mid` and loop through the remaining length. 
```js
  let left = [];
  for ( let i = 0; i < mid; i++ ) {
    left.push(arr[i]);
  }

  let right = [];
  for ( let i = mid; i < arr.length; i++ ) {
    right.push(arr[i]);
  }
```
After this operation, our initial array will be in two parts: `left = [19, 4]` and `right = [-3, 2, 11]`. This is where we will begin our recursive step and perform these same operations on the `left` and `right` arrays.
```js
  mergeSort(left); // mergeSort([19, 4])
  mergeSort(right); // mergeSort([-3, 2, 11])
```
As these recursive calls resolve, the secondary `merge` function will be called with arguments of the `left`, `right`, and initial array. 

Let's take it one side at a time, starting with the left side. <mark>Once `mergeSort(left)` is resolved, we are left with `left = [19]` and `right = [4]`, with a new initial array of `[19, 4]`</mark>. Remember that initial check at the beginning: `if ( n < 2 ) return arr;`? When `mergeSort` is called again on these new `left` and `right` arrays, the condition _fails_ and we return because the length is of the simplest base case: 1. We can now move on to the next line of calling `merge(left, right, arr)`.

This takes us to the secondary `merge` function, which takes care of sorting and arranging the new small arrays. The premise here is to continually compare values _as long as there are values to compare_. For this reason, let's use a `while` loop. We also need to keep track of **three** different indices: the `left`, the `right`, and the current full array.
```js
  let i = 0; // left array index
  let j = 0; // right array index
  let k = 0; // full array index
```
For our `while` loop, we need to keep comparing values as long as there values to compare, i.e. as long as there are still numbers in the `left` _and_ numbers in the `right`:
```js
  while ( i < left.length && j < right.length )
```
Once in this loop, we can start comparing values by using a simple `if...else` statement:
```js
  if ( left[i] <= right[j] ) {
    arr[k] = left[i];
    i++;
  } else {
    arr[k] = right[j];
    j++;
  }
  k++;
```
In words, we are asking, "is the value of `left` at index `i` (`19`) less than or equal to the value of `right` at index `j` (`4`)"? Since `19 < 4`, this condition reads as `false` and we enter the `else` block. 

Because the value of `right[j]` is the smaller, we want to _reassign_ the index `k` of `arr` to be that value. Then we can increment both `j` and `k`, to move on to the next index in those arrays. We don't increment `i`, because we have not yet assigned that value. At the end of this step, our initial left-side array looks like `[4, 4]`.

After this step, we have reached the end of our `right`, but we still have values unassigned in our `left`. Because of this, we want to check for those unassigned values by checking the index vs. the length of the array. If there are still values left after the intial `while` loop, we know those values will be larger and can be added to the end of our initial array.
```js
  while ( i < left.length ) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while ( j < right.length ) {
    arr[k] = right[j];
    j++;
    k++;
  }
```
In our example, the `while` condition for `( i < left.length )` passes, so we can fill in our initial array with the remaining `left` values, giving us a final initial array of `[4, 19]`, which returns as the `left` array or our primary `mergeSort` function.

Once these steps complete for the right side, the secondary `merge` function is able to do one final sort with the newly sorted left and right sides, giving us our end goal of [-3, 2, 4, 11, 19].

This sorting algorithm has a time complexity of `O(n log n)`.