function FizzBuzzCheck(val) {
  if (val % 3 === 0) {
    return "Fizz";
  } else if (val % 5 === 0) {
    return "Buzz";
  } else if (val % 5 === 0 && val % 3 === 0) {
    return "FizzBuzz";
  }
  return val;
}

module.exports = function returnFizzBuzz(FBT) {
  let results = [];

  //console.log("leftNode", FBT.root.left);
  let _walk = (node) => {
    if (node.left) {
      node.left.data = FizzBuzzCheck(node.left.data);
      _walk(node.left);
    }
    if (node.right) {
      node.right.data = FizzBuzzCheck(node.right.data);
      _walk(node.right);
    }
    results.push(node.data);
  };
  _walk(FBT.root);
  return results;
};

/*
  findMaximum(root) {
      let results = [];
    if (root === null) {
      return -999;
    }
    let finalTree = root;
    let lefty = findMaximum(root.left);
    let righty = findMaximum(root.right);
    if()
    return maximum;
  }*/
