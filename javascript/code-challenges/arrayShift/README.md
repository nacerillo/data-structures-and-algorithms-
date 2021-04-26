# Challenge Summary

- Be able to edit an array of objects without having to use built in functions.

## Challenge Description

- As described in the Canvas assignment: Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency:

- Regardless of whether array is even or odd, the "middle" of the array will be at an index = `Math.ceil(arr.length / 2)`.
- Create new array.
- Iterate over each element of orignal array, pushing the elments on each pass.
- when the index = middle, add the desired element.

## Solution:

[My Code](https://github.com/nacerillo/data-structures-and-algorithms-/blob/array-shift/javascript/code-challenges/arrayShift/array-shift.js)

[My WhiteBoard Images:1](https://share.icloud.com/photos/0qUvNVdYrrhUdHc9m28Q9o0AA)
[My WhiteBoard Images:2](https://share.icloud.com/photos/07jI_Mje7p_Va-b_oMkAO_S7g)
