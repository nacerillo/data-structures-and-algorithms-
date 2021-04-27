//nodes have two things: a peice of data stored in them, and a reference to the next node.
"user strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;
