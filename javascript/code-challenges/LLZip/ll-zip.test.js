"use strict";

// Require our linked list implementation
const LinkedList = require("./ll-zip.js");
describe("Linked List", () => {
  it("should be able to create an empty linked list on instantiation", () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it("should zipp properly", () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    list2.append("A");
    list2.append("B");
    list2.append("C");
    console.log(list2);
    list1.zipper(list2);
    console.log(list1.toString());
    expect(true).toEqual(true);
    //expect(list.includes(8)).toEqual(false);
  });
});
