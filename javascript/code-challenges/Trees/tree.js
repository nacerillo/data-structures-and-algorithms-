/*class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}*/
const Node = require("./node.js");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.addHelper(this.root, node);
    }
  }
  addHelper(root, newNode) {
    if (newNode.data < root.data) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.addHelper(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.addHelper(root.right, newNode);
      }
    }
  }
  /*addHelper(root_node, new_node) {
    ///if the new node data is less than the root, we want to add it to the left side
    if (new_node.data < root_node.data) {
      //if the left  is empty, than add our node to the left
      if (!root_node.left) {
        root_node.left = new_node;
      }
      //otherwise, we start traversing down the left side.
      else {
        this.addHelper(root_node.left, new_node);
      }
    } else {
      //if node is greater than the root, and if the right is emppy, we add it to the right
      //if right side is empty,
      if (!root_node.right) {
        root_node.right = new_node;
      }
      //otherwise, we start traversing recursivinly down the right side.
      else {
        this.addHelper(root_node.right, new_node);
      }
    }
  }*/
  contains(root_node, value) {
    //if root is empry, return false
    if (!root_node) {
      return false;
    } else {
      //if the root contains the value, return true
      if (root_node.data === value) {
        return true;
      }
      //if the value is greater than the root data,
      //than it must be somewhere in the right branch
      //(Assuming it does exist)
      //Otherwsie, it must be in the left branch
      else if (root_node.data < value) {
        return this.contains(root_node.right, value);
      } else {
        return this.contains(root_node.left, value);
      }
    }
  }

  countNodesPreOrder() {
    let total = 0;
    let walk = (node) => {
      total += 1;
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
    };
    walk(this.root);
    return total;
  }

  countNodesInOrder() {
    let total = 0;
    let walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      total += 1;
      if (node.right) {
        walk(node.right);
      }
    };
    walk(this.root);
    return total;
  }

  countNodesPostOrder() {
    let total = 0;
    let walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
      total += 1;
    };
    walk(this.root);
    return total;
  }

  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.data);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.data);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.data);
    };
    _walk(this.root);
    return results;
  }
}

module.exports = BinarySearchTree;
