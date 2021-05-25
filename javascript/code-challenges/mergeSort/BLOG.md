# Merge Sort:

Merge sort is a type of sorting algorithm that involves breaking down the array into smaller and smaller havles, and then sorting/merging each half.

## Psuedo Code:

```js
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

## Trace:

the algorithm works in the following way

- if the length of the array is still greater than 1...
  - cut the array into two equal halves, a left, and a right array.
  - recursively cut left half until it cannot be cut any further
  - recursively cut the half
  - merge the left and right halves
- return the result.

Below shows the recursive tree diagram, showing the order of each call in the stack.

![image](javascript/code-challenges/mergeSort/assets/Screen Shot 2021-05-25 at 2.38.51 PM.png)
![image](javascript/code-challenges/mergeSort/assets/Screen Shot 2021-05-25 at 2.38.51 PM.png)

## Efficency:

Time: `O(nLog(n))`
