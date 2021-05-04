# Challenge Summary

- Implement animal shelter using two queues.

## Challenge Description

- create an class called `AnimalShelter` that takes in two queues, a Cat queue, and a Dog Queue.
- implement the `AnimalShelter` class with the following methods:
  - `enqueue(animal)`: adds `animal` to the shelter. animal can be either a dog or a cat object.
  - `dequeue(pref)`: returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency:

## Solution:

- implement simple animal class with a name, and animal type.
- using same functionality for queue as previous labs.

```javascript
class Animal {
  constructor() {
    this.name = "";
    this.type = "";
  }
}

class Queue {
  constructor() {
    this.front = 0;
    this.length = 0;
  }
  enqueueItem(value) {
    this[this.length] = value;
    this.length++;
  }
  dequeueItem() {
    let current_length = this.length - this.front;
    if (current_length <= 0) {
      return null;
    }
    let node = this[this.front];
    delete this[this.front];
    this.front++;
    this.length--;
    if (this.front === this.length) {
      this.front = 0;
    }
    return node;
  }

  peek() {
    return this[this.length - 1];
  }
}
```

- when calling for enqueue and dequeue on AnimalShelter, I call either `enqueuItem` of `dequeueItem` on which over queue matches with the value `pref`

[My Code] (https://github.com/nacerillo/data-structures-and-algorithms-/tree/main/javascript/code-challenges/fifoAnimalShelter)
