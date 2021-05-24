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

## Tests:

- Will return an array that displays the nodes in the order that they were added.
- ![alt text]()

## SOURCE:

- [cd/ci] ()
- [code] ()
