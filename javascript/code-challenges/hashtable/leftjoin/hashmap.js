const LinkedList = require("./linked-list.js");

class HashMap {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        19) %
      this.size
    );
  }

  addPair(key, val) {
    let hash = this.hash(key);
    //console.log(hash);
    if (!this.storage[hash]) {
      let newList = new LinkedList();
      newList.addNode([key, val]);
      this.storage[hash] = newList;
    } else {
      this.storage[hash].addNode([key, val]);
    }
  }

  getValueofKey(key) {
    let hash = this.hash(key);
    let list = this.storage[hash];
    let current_node = list.head;

    let results = list
      .getList()
      .filter((keyvaluePair) => keyvaluePair[0] === key);
    if (results.length > 1) {
      return results.map((keyvaluePair) => keyvaluePair[1]);
    }

    if (current_node.data[0] === key) {
      return current_node.data[1];
    }

    while (current_node.next) {
      current_node = current_node.next;
      if (current_node.data[0] === key || current_node.next.data[0]) {
        return current_node.data[1];
      }
    }
    return "does not contain key";
  }

  mapContains(key) {
    let hash = this.hash(key);
    if (this.storage[hash]) {
      while (this.storage[hash].head) {
        if (this.storage[hash].head.data[0] === key) {
          return true;
        }
        this.storage[hash].head = this.storage[hash].head.next;
      }
    }
    return false;
  }
}

module.exports = HashMap;
