# Challenge Summary

- Implementation a Linked List class and methods

## Challenge Description

- Linked list should be now implement the ability to get the Kth element from the tail.
  - Unit Tests:
  1. Where k is greater than the length of the linked list
  2. Where k and the length of the list are the same
  3. Where k is not a positive integer
  4. Where the linked list is of a size 1
  5. “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

## Approach & Efficiency:

- Use same `Node` and `LinkedList` except with a new function:

```javascript
/*Node Class*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/*Linked List Class*/
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(given_value) {}
  includes(given_value) {}
  toString() {}

  //NEW NEW NEW*/
  kthFromEnd(k) {}
}
```

- in order to find this. must calculate the length of the List.
- Discovered that the Kth element from the end is ALSO the `(LL.Length-k-1)`th element from the begining.

- TIME COMPLEXITY: `O(n)` as iteration only needs to happen once to go through the list.
- total time depends on number of elements, `n`, in the list.

## Solution:

- [WhiteBoarding]()
- [CODE-Actions](https://github.com/nacerillo/data-structures-and-algorithms-/actions)
- [CODE]()
