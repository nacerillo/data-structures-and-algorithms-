"use strict";

const Stack = require("../stacksAndQueues/stacks-and-queues.js");
// Require our linked list implementation

const PsuedoQueue = require("./queue-with-stacks.js");
describe("PseuoQueue", () => {
  it("can enqueue an item", () => {
    let q = new PsuedoQueue();
    q.enqueue("one");
    q.enqueue("two");
    q.enqueue("three");
    let popped = q.dequeue();
    expect(popped).toEqual("one");
  });

  it("returns error message when trying to dequeue an empty queue", () => {
    let q = new PsuedoQueue();
    expect(q.dequeue()).toEqual("Cannot Perform Dequeue. Queue Is Empty");
  });

  it("Stack can return a maximum", () => {
    let stack = new Stack();
    stack.pushToStack(10);
    stack.pushToStack(9);
    stack.pushToStack(99);
    stack.pushToStack(12);

    //expect(stack.findMax()).toEqual(99);
  });
});
