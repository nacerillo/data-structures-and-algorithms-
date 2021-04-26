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

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    console.log("HEAD", this.head);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current_node = this.head;
      while (current_node.next) {
        if (current_node.next.value === value) {
          console.log("if is running");
          let temp = current_node.next;
          current_node.next = newNode;
          newNode.next = temp;
          break;
        } else {
          console.log("else is running");
          current_node = current_node.next;
        }
      }
    }
  }

  insertAfter(value, newVal) {
    let newNode = new Node(newVal);

    if (!this.head) {
      this.head = node;
    } else {
      let current_node = this.head;
      while (current_node.value) {
        if (current_node.value === value) {
          let temp = current_node.next;
          current_node.next = newNode;
          newNode.next = temp;
          break;
        } else {
          current_node = current_node.next;
        }
      }
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
let list = new LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.insertBefore(6, 99);
module.exports = LinkedList;
