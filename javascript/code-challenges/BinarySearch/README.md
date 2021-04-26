# Challenge Summary

- Introduces us to Binary Search, which also leads us into looking up the idea of recursion.

## Challenge Description

- As described in the Canvas assignment: Write a function called `BinarySearch` which searchs for a given element inside of a sorted
  array. if the element does exist in the array, return that element's index. otherwise, return -1.

## Approach & Efficiency:

- Looking up binary search algorthim
  - [SOURCE](https://hackernoon.com/binary-search-in-detail-914944a1434a)
  1. Compare `x` with middle element
  2. if `x` equals middle element, return index of `x`
  3. ELSE - if `x` is greater than middle element, than `x` must be on
     the right side of the sorted array. recurs to the right
  4. ELSE - if `x` is smaller, than `x` must be on the left side of the sorted array. recurs to the left.

## Solution:

[My Code](https://github.com/nacerillo/data-structures-and-algorithms-/blob/array-)

[My WhiteBoard Images:1](https://share.icloud.com/photos/0Y2OVmeKei-Vkt-H8yxJLO7kA)
