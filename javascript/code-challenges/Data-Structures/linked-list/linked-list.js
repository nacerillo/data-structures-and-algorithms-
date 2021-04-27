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

  includes(val) {
    let current_node;

    //check if list is already empty or not
    if (!this.head) {
      return false;
    } else {
      current_node = this.head;
      //iterate through list, if value matches that of the current node
      //then return true, otherwise, iterate to next.
      while (current_node.next) {
        if (current_node.value == val) {
          return true;
        } else {
          current_node = current_node.next;
        }
      }
    }
    return false;
  }
  kthFromEnd(k) {
    let length = 0;
    let current_node;
    if (k < 0) {
      return "Cannot Use Negative";
    }
    if (!this.head) {
      return "list does not exist";
    } else {
      current_node = this.head;
    }

    while (current_node) {
      current_node = current_node.next;
      length++;
    }
    if (length < k) {
      return "Exception";
    }
    if (length >= k) {
      current_node = this.head;
      for (var x = 0; x < length - k - 1; x++) {
        current_node = current_node.next;
      }
    }

    return current_node.value;
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
}

module.exports = LinkedList;
