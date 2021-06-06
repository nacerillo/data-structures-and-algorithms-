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
    if (this.mapContains(key)) {
    }
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

let hashmap = new HashMap(4);

hashmap.addPair("brian", "nations");
hashmap.addPair("nicholas", "cerillo");
hashmap.addPair("chris", "gantt");
hashmap.addPair("peter", "staker");
hashmap.addPair("elijah", "prom");

//console.log(hashmap);
console.log(hashmap.mapContains("brian"));
