"use strict";

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
});
