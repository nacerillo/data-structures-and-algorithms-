# Challenge Summary

- Breadth First Search

## Challenge Description

- Implement Breadth First Search in Binary Tree.

## Approach & Efficiency:

- Breadth first search means iterating through each node as they appear,
- going layer by layer, from left to right.
- Will make use of a Queue.
- Starting with queue containing the root node...
  1. dequeue node from the front of the queue
  2. dequeue node and push its data value into array
  3. if the node had children, enqueue them in starting from left to right.
  4. return to the front of the queue, repeat step 1-3.
- ![alt text](https://github.com/nacerillo/data-structures-and-algorithms-/blob/breadth-first/javascript/code-challenges/Trees/__test__/assets/Screen%20Shot%202021-05-15%20at%2012.54.08%20PM.png) 
## Tests:

- Will return an array that displays the nodes in the order that they were added.


## SOURCE:
- [code] (https://github.com/nacerillo/data-structures-and-algorithms-/blob/breadth-first/javascript/code-challenges/Trees/binarytree.js) 
