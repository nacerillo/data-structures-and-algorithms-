class Stack {
  constructor() {
    this.length = 0;
  }

  pushToStack(value) {
    this[this.length++] = value;
  }

  popFromStack() {
    if (this.length === 0) {
      return "oops! all empty!";
    }
    let result = this[--this.length];
    // console.log(this[this.length]);
    delete this[this.length];
    return result;
  }

  findMax() {
    let max = -9999;
    let copy = this;

    while (copy.length > 0) {
      let item = copy.popFromStack();
      if (item.data >= max) {
        max = item.data;
      }
    }
    return max;
  }

  peekAtStack() {
    return this[this.length - 1];
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

class PsuedoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    //move items from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.pushToStack(this.stack1.popFromStack());
    }
    //push item to stack1
    this.stack1.pushToStack(value);

    while (!this.stack2.isEmpty()) {
      this.stack1.pushToStack(this.stack2.popFromStack());
    }
  }
  dequeue() {
    if (this.stack1.isEmpty()) {
      return "Cannot Perform Dequeue. Queue Is Empty";
    }
    let top = this.stack1.peekAtStack();
    this.stack1.popFromStack();
    return top;
  }
}

module.exports = PsuedoQueue;
