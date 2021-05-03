# Challenge Summary

- Implement a Queue using two stacks

## Challenge Description

<!-- Description of the challenge -->

- Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:
  - `enqueue(value)` which inserts value into the PseudoQueue, using a first-in, first-out approach.
  - `dequeue()` which extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Approach & Efficiency

- make queue with only two properties, Stack1 and Stack2

- ENQUEUE:

  - While stack1 is not empty, push all items from stack1 to stack2
  - Push item to be enqueued onto stack1
  - Push everything else back onto stack1.

- DEQUEUE:

  - if stack1 is empty, then return error message
  - otherwise, pop item from stack1, and return it.

  <!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution

<!-- Embedded whiteboard image -->
