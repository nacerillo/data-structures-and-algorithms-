const { root } = require("cheerio");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
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

  breadthFirstSearch() {
    let results = [];
    let queue = [this.root];
    if (this.root === null) {
      return null;
    }
    // console.log("QL", queue.length);
    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        let node = queue.shift();
        results.push(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
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

  // we need to go through every node in the tree, and each time
  //we go to a node we'll need to check  for a maximum
  //against 3 things..
  // the current Node's data, the Left Neigbhor's data, and the Right Neighbor's data.
  findMaximum(root) {
    if (root === null) {
      return -999;
    }
    let maximum = root.data;
    let lefty = this.findMaximum(root.left);
    let righty = this.findMaximum(root.right);

    if (lefty.data > maximum) {
      maximum = lefty.data;
    }
    if (righty.data > maximum) {
      maximum = righty.data;
    }
    return maximum;
  }
}

module.exports = BinaryTree;
