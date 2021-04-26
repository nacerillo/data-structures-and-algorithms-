"use strict";

// Require our linked list implementation
const LinkedList = require("../ll-insertion.js");
describe("Linked List", () => {
  it("should be able to create an empty linked list on instantiation", () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it("should insert node-x BEFORE node-y when using insertBefore()", () => {
    let list = new LinkedList();
    expect(list.toString()).toEqual("list does not exist");
    list.append(5);
    list.append(6);
    list.append(7);
    list.insertBefore(7, 99);
    expect(list.toString()).toEqual("{5}->{6}->{99}->{7}->NULL");
  });

  it("should insert node-x AFTER node-y when using insertAfter()", () => {
    let list = new LinkedList();
    expect(list.toString()).toEqual("list does not exist");
    list.append(5);
    list.append(6);
    list.append(7);
    list.insertAfter(7, 99);
    expect(list.toString()).toEqual("{5}->{6}->{7}->{99}->NULL");
  });
});
