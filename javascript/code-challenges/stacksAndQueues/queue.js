class Queue {
  constructor() {
    // this.front = 0;
    //  this.length = 0;
    this.items = [];
    this.length = 0;
  }
  enqueue(value) {
    /* this[this.length] = value;
    this.length++;*/
    this.items.push(value);
    this.length++;
  }
  dequeue() {
    /* let current_length = this.length - this.front;
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
    return node;*/
    let dequeued = this.items.shift();
    this.length--;
    return dequeued;
  }

  peek() {
    return this.items[0];
  }
}

/*class Queue {
  constructor() {
    this.queueArr = [];
  }

  enqueue(item) {
    this.queueArr.push(item);
  }
  dequeue() {
    return this.queueArr.shift();
  }
  peek() {
    return this.queueArr[0];
  }
}*/

module.exports = Queue;
