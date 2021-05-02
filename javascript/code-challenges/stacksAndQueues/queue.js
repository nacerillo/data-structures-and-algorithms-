class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;
    return this;
  }

  dequeue() {
    let top = this.length - (this.length - 1);
    let poptop = this[top];
    console.log("FIFO?", poptop);
    delete this[top];
    this.length--;
    return poptop;
  }
}

module.exports = Queue;
