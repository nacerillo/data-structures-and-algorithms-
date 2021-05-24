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
  //console.log("leftNode", FBT.root.left);
  if (!FBT.root) {
    return null;
  }
  let _walk = (node) => {
    if (node.left) {
      node.left.data = FizzBuzzCheck(node.left.data);
      _walk(node.left);
    }
    if (node.right) {
      node.right.data = FizzBuzzCheck(node.right.data);
      _walk(node.right);
    }
    node.data = FizzBuzzCheck(node.data);
  };
  _walk(FBT.root);
  return FBT;
};

/*
  fizzbuzzSetter(root) {
    if (root === null) {
      return null;
    }
    
    let lefty = fizzbuzzSetter(root.left);
    let righty = fizzbuzzSetter(root.right);
    if(lefty){
      root.data = FizzBuzzCheck(lefty.left.data);
    }
    if(righty){
      root.data = FizzBuzzCheck(lefty.left.data);
    }
    return root;
  }*/
