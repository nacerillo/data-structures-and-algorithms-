class Stack {
  constructor() {
    //this.length = 0;
    this.elements = [];
    this.maximum = Number.MIN_VALUE;
  }

  pushToStack(value) {
    // this[this.length++] = value;
    this.elements.push(value);
    if (value >= this.maximum) {
      this.maximum = value;
    }
    //
  }

  popFromStack() {
    if (this.length === 0) {
      return "oops! all empty!";
    }
    let popped = this.elements.pop();
    // console.log(this[this.length]);
    //delete this[this.length];
    return popped;
  }

  findMax() {
    /*let max = -9999;
    let copy = this;

    while (copy.length > 0) {
      let item = copy.popFromStack();
      if (item.data >= max) {
        max = item.data;
      }
    }
    return max;*/
    return this.maximum;
  }

  peekAtStack() {
    return this.items[this.items.length - 1]; //this[this.length - 1];
  }

  isEmpty() {
    if (this.items.length === 0) {
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
