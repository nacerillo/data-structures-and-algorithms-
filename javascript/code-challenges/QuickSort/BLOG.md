# Quick Sort:

Quick sort functions similarly to Merge sort in that it follows a 'divide and conquor' approach to sorting an array.

- we start by picking an element in the array. we then check each element that lies to the left and to the right of this pivot element.
- if the element is greater than the pivot point, we swap to the right of the pivot point.
- if the element is less than the pivot point, we swap that element to sit on the left side.
- we then apply this same process to the elements on either side of the original pivot point.

## PsuedoCode:

```js

ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
