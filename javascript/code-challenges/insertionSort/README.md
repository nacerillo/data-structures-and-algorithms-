# Challenge Summary

- implement Insertion sort, and write a blog that elaborates on how it is performed.

## Whiteboard Process

### steps:

- start at index 1;
- on each iteration of the for loop
  - save value of `arr[i]` as a `temp` value.
  - while `temp < arr[j]`, then set `arr[j+1]` - which would be `arr[i]` - equal to `arr[j]` instead. and iterate j down towards the left of the array, until we reach a point where `arr[j]` is not greater than `temp`, or until `j < 0`.
  - reset the value of `arr[j]` to be equal to `temp`;
- new iteration

![alt text](javascript/code-challenges/insertionSort/assets/part1.png)

## Approach & Efficiency

- implemented using the following psuedocode

```js
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Solution

- run `npm test insertion-sort` to see it perform sort on an example array.

```

```
