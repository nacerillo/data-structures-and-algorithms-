# Challenge Summary

- Implement left join on two hash maps.
- **INPUT:OUTOUT**
  ![alt text]("./assets/Screen Shot 2021-06-08 at 2.45.09 PM.png")

## Whiteboard Process / Steps Taken

**Algorithm Steps**

1. iterate through through left hashmap, making sure to reach each key ONCE through the use of a forloop - to reach every index in the storage that has a LinkedList - and a whileloop - to iterate through each linkedlist.
2. for each node reached in the while loop, check to see if the right hashmap contains the same key as the left hashmap.
3. if the right hashmap contains the key, then push the vale of that key on the the collection.

## Efficiency

- `O(n^2)`

## Solution

- run `node left-join` to see it perform sort on an example array.
