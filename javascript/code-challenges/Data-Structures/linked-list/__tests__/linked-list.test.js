"use strict";

// Require our linked list implementation
const LinkedList = require("../linked-list.js");
describe("Linked List", () => {
  it("should be able to create an empty linked list on instantiation", () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it("should be able to add one or more nodes to the list", () => {
    let list = new LinkedList();
    let addOne = 99;
    let addAnother = 44;
    list.append(addOne);
    list.append(addAnother);
    expect(list.head.value).toEqual(99);
    expect(list.head.next.value).toEqual(44);
  });
  it("The head property points to the first node in the linked list", () => {
    let list = new LinkedList();
    let first = 1;
    let second = 2;
    let third = 3;
    list.append(first);
    list.append(second);
    list.append(third);
    expect(list.head.value).toEqual(1);
  });

  it("should return TRUE when finding a value within the linked list that exists", () => {
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    expect(list.includes(5)).toEqual(true);
    //expect(list.includes(8)).toEqual(false);
  });

  it("should return FALSE when searching for a value within the linked list that does NOT exists", () => {
    let list = new LinkedList();
    list.append(5);
    list.append(6);
    expect(list.includes(8)).toEqual(false);
    //expect(list.includes(8)).toEqual(false);
  });

  it("it should properly return a collection of all the values that exist in the linked list", () => {
    let list = new LinkedList();
    expect(list.toString()).toEqual("list does not exist");
    list.append(5);
    list.append(6);
    list.append(7);
    expect(list.toString()).toEqual("{5}->{6}->{7}->NULL");
  });

  it("return element that is Kth From the End", () => {
    let list = new LinkedList();
    list.append(4);
    list.append(3);
    list.append(2);
    list.append(1);
    list.append(0);
    expect(list.kthFromEnd(0)).toEqual(0);
    expect(list.kthFromEnd(0)).toEqual(0);
    expect(list.kthFromEnd(2)).toEqual(2);
  });

  it("Returns expection if K is greater than length of linked list", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    expect(list.kthFromEnd(6)).toEqual("Invalid K");
  });
  it("Returns Cannot Use Negatives if k is less than zero", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);

    expect(list.kthFromEnd(-1)).toEqual("Invalid K");
  });
});
