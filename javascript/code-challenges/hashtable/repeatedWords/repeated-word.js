class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

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
      return currnet_node.data[1];
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
        console.log("Item in map", this.storage[hash].head.data[0]);
        if (this.storage[hash].head.data[0] === key) {
          return true;
        }
        this.storage[hash].head = this.storage[hash].head.next;
      }
    }
    return false;
  }
}

module.exports = function repeatedWords(string) {
  if (!string) {
    return "Exception";
  }
  if (string.length < 1) {
    return "Exception";
  }
  let stringArr = string.split(" ");
  let hashmap = new HashMap(string.length);
  //value_found = true;

  for (let i = 0; i < stringArr.length; i++) {
    if (!hashmap.mapContains(stringArr[i])) {
      hashmap.addPair(stringArr[i], 1);
      // console.log("Item Added");
    } else {
      return stringArr[i];
    }
  }
  return "No Repeats";
};
