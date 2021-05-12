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
  let _walk = (node) => {
    if (node.left) {
      node.left.data = FizzBuzzCheck(FBT.node.left.data);
      _walk(FBT.node.left);
    }
    if (node.right) {
      node.left.data = FizzBuzzCheck(node.left.data);
      _walk(node.right);
    }
    results.push(node.data);
  };
  _walk(this.root);
  return results;
};
