# Challenge Summary

- Implementation insertBefore and insertAfter methods

## Challenge Description

- Create a Node class that has the properties for the value stroed in a `Node`, and a pointed to the next Node.
- Create a `LinkedList` class that includes a property of `head`.
- Upon instantiation, a linked list should be created.
- Linked list should be have the following functionality
  - Can successfully add a node to the end of the linked list
  - Can successfully add multiple nodes to the end of a linked list
  - Can successfully insert a node before a node located i the middle of a linked list
  - Can successfully insert a node before the first node of a linked list
  - Can successfully insert after a node in the middle of the linked list
  - Can successfully insert a node after the last node of the linked list

## Approach & Efficiency:

- As per our Friday demonstration Sunday Challenge, I made a `Node` and `LinkedList` class with the following structure:

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
  //Add a new node that contains a given value
  append(given_value) {}
  //Returns true or false depending whether or not a node in the list alreadt includes a given_value
  includes(given_value) {}
  //Returns a string representation of the entire Linked List
  toString() {}
}
```

- key logic for this assignemnt was insertion of the node.
- in order to place a node between to existing nodes, need to have a dummy variable.
- dummy variable is needed to hold origin reference.

```javascript
/* The SWAP*/
if(/*I've reached the condition that i want to insert my Node at*/){
    let temp = currentNode.next;
    currentNode.next = nodeIWantToInsert;
    nodeIWantToInsert.next = temp;
}
```

- TIME COMPLEXITY: `O(n)` as iteration only needs to happen once to go through the list.
- total time depends on number of elements, `n`, in the list.

## Solution:

- [Pulls](https://github.com/nacerillo/data-structures-and-algorithms-/pull/19/commits)
- [My Code](https://github.com/nacerillo/data-structures-and-algorithms-/tree/main/javascript/code-challenges/ll-insertion)
- [My WhiteBoarding]()
