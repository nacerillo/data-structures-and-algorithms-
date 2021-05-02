"use strict";

// Require our linked list implementation
const Stack = require("./stacks-and-queues.js");
const Queue = require("./queue.js");
describe("Stack", () => {
  it("can push item onto the stack", () => {
    let stack = new Stack();
    stack.pushToStack("first");
    expect(stack.peekAtStack()).toEqual("first");
    stack.pushToStack("second");
    expect(stack.peekAtStack()).toEqual("second");
    console.log(stack);
  });
  it("Peek returns the top of the stack", () => {
    let stack = new Stack();
    stack.pushToStack("first");
    stack.pushToStack("second");
    stack.pushToStack("third");
    expect(stack.peekAtStack()).toEqual("third");
    let popped = stack.popFromStack();
    expect(stack.peekAtStack()).toEqual("second");
  });
  it("Pop both removes and returns the value of the top of the stack", () => {
    let stack = new Stack();
    stack.pushToStack("first");
    stack.pushToStack("second");
    stack.pushToStack("third");
    let popped = stack.popFromStack();
    expect(popped).toEqual("third");
    expect(stack.peekAtStack()).toEqual("second");
  });

  it("isEmpty returns false when NOT empty", () => {
    let stack = new Stack();
    stack.pushToStack("first");
    expect(stack.isEmpty()).toEqual(false);
  });
  it("isEmpty returns true when IS empty", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });
});

describe("Queues", () => {
  it("can push item onto the queue", () => {
    let que = new Queue();
    que.enqueue("first");
    que.enqueue("second");
    que.enqueue("third");
    console.log(que);
  });
  it("can dequeue item from the queue", () => {
    let que = new Queue();
    que.enqueue("first");
    que.enqueue("second");
    que.enqueue("third");
    que.dequeue();
    console.log(que);
  });
});
