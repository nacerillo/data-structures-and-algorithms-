# Challenge Summary

- Multi Bracket Validation

## Challenge Description

- Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: `(), [], {}`

## Approach & Efficiency:

- As we Iterate through the string
  - If we reach an opening braket, **push** it onto the stack.
  - If we reach a closing bracket, **peek** at the stack
    - If the braket at the top of the stack matches with the closing braket, **pop** of the top of the stack.
    - otherwise, continue.
- By the time we are done iterating...
  - If the stack is empty, that means all of the brakets had a matching partner. RETURN TRUE
  - otherwise, not all of the brakets had a match. RETURN FALSE.

## Solution:

[My Code](https://github.com/nacerillo/data-structures-and-algorithms-/blob/multi-bracket-validation/javascript/code-challenges/multi-bracket-validation/multi-bracket-validation.js)
