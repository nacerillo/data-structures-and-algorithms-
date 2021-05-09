"user strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length++] = value;
  }

  pop() {
    if (this.length === 0) {
      return "oops! all empty!";
    }
    let result = this[--this.length];
    // console.log(this[this.length]);
    delete this[this.length];
    return result;
  }

  peek() {
    return this[this.length - 1];
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
//module.exports = Queue;
