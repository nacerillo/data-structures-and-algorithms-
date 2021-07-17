"user strict";

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
    return this.maximum;
  }

  peekAtStack() {
    return this.elements[this.elements.length - 1]; //this[this.length - 1];
  }

  isEmpty() {
    if (this.elements.length === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
//module.exports = Queue;
