const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  getList() {
    if (!this.head) return "List does not exist";

    let current_node = this.head;

    let list = [];
    while (current_node) {
      list.push(current_node.data);
      current_node = current_node.next;
    }
    return list;
  }
}
module.exports = LinkedList;
