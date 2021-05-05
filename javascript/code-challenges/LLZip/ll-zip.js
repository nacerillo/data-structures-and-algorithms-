"use strict";
const Node = require("./node.js");
// Linked list is defined by it's head.
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    let node = new Node(val);
    //var current_node;
    //if the linkedlist does not yet exist. make one!
    if (!this.head) {
      this.head = node;
    } else {
      let current_node = this.head;
      while (current_node.next) {
        current_node = current_node.next;
      }
      current_node.next = node;
    }
  }

  toString() {
    let current_node;
    let listString = "";
    if (!this.head) {
      return "list does not exist";
    } else {
      current_node = this.head;
      while (current_node.next) {
        listString += `{${current_node.value}}->`;
        current_node = current_node.next;
      }
      listString += `{${current_node.value}}->NULL`;
    }
    console.log(listString);
    return listString;
  }

  zipper(ziplist) {
    let current1 = this.head;
    let current2 = ziplist.head;
    let temp1 = current1.next;
    let temp2 = current2.next;
    while (current2.next && current1.next) {
      temp1 = current1.next;
      temp2 = current2.next;
      current1.next = current2;
      current2.next = temp1;
      current1 = temp1;
      current2 = temp2;
    }
    ziplist.head = current2;

  
    //console.log(temp1);
    //console.log(temp2);
  }
}

module.exports = LinkedList;
