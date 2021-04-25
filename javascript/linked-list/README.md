# Challenge Summary

- Implementation a Linked List class and methods

## Challenge Description

- Create a Node class that has the properties for the value stroed in a `Node`, and a pointed to the next Node.
- Create a `LinkedList` class that includes a property of `head`.
- Upon instantiation, a linked list should be created.
- Linked list should be have the following functionality
  - Be able to insert a new Node
  - Be able to search for a specific Node, and return true or false depending on whether or not the node exists in the List.
  - Be able to print out the list in the following string format: `{ a } -> { b } -> { c } -> NULL`

## Approach & Efficiency:

- As per our Friday demonstration, I made a `Node` and `LinkedList` class witht the following structure:

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

- key logic for each of these functions is being able to iterate through the linked list.

```javascript

if(/*list is empty or non-existenty*/){
    return false
    OR
    this.head = new_node;
}
/*Iterated using the following logic*/
current_node = head;
while (current_node != NULL) {
  /*DO A THING{
    ........
    ........
    }*/
  //aftr doing a thing...
  current_node = current_node.next;
}
```

- TIME COMPLEXITY: `O(n)` as iteration only needs to happen once to go through the list.
- total time depends on number of elements, `n`, in the list.

## Solution:

[My Code](https://github.com/nacerillo/data-structures-and-algorithms-/blob/array-shift/javascript/code-challenges/arrayShift/array-shift.js)

[My WhiteBoard Images:1](https://share.icloud.com/photos/0qUvNVdYrrhUdHc9m28Q9o0AA)
[My WhiteBoard Images:2](https://share.icloud.com/photos/07jI_Mje7p_Va-b_oMkAO_S7g)
