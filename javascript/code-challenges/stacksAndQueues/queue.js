class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = 0;
    this.length = 0;
  }
  enqueue(value) {
    this[this.length] = value;
    this.length++;
  }
  dequeue() {
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
      this.length = 0;
    }
    return node;
  }

  peek() {
    return this[this.length - 1];
  }
}

module.exports = Queue;
