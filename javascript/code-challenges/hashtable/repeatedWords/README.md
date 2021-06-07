# Challenge Summary

- implement a function that takes in an exceptionally long string, and return the first word that repeats itself inside the string.
- **Example:**
- **INPUT:** `"Neither a borrower nor a lender be, For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry."`
- **OUTPUT:** `a`

## Whiteboard Process / Steps Taken

- can solve this problem using a hashmap.

**Algorithm Steps**

1. create a hashmap an empty hashmap.
2. convert the string into an array of words. using `split()` method to split between spaces in the string.
3. iterate through the array, checking the follwing at each iteration.
   - if map does not yet contain the word at the current iteration, then add it to the map.
   - otherwise, if the map DOES already contain the word, break from the loop and return the word.

## Efficiency

- `O(1)`

## Solution

- run `npm test repeated-word` to see it perform sort on an example array.
