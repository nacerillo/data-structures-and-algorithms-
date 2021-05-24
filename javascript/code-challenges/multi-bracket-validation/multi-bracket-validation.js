class Stack {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length++] = value;
  }
  pop() {
    if (this.length === 0) {
      return "empty";
    }
    let result = this[--this.length];
    delete this[this.length];
    return result;
  }
  peek() {
    return this[this.length - 1];
  }
  isEmpty() {
    // console.log("LENGTH: ", this.length);
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

module.exports = function bracketValidator(brakString) {
  let brakstak = new Stack();
  if (brakString.length <= 1) {
    return false;
  }
  for (let x = 0; x < brakString.length; x++) {
    // console.log(brakstak);
    if (
      brakString[x] === "(" ||
      brakString[x] === "{" ||
      brakString[x] === "["
    ) {
      brakstak.push(brakString[x]);
    } else {
      if (brakString[x] === "}") {
        if (brakstak.peek() === "{") {
          brakstak.pop();
        }
      } else if (brakString[x] === ")") {
        if (brakstak.peek() === "(") {
          brakstak.pop();
        }
      } else if (brakString[x] === "]") {
        if (brakstak.peek() === "[") {
          brakstak.pop();
        }
      } else {
        continue;
      }
    }
  }

  if (brakstak.isEmpty()) {
    // console.log("Empty", brakstak);
    return true;
  } else {
    // console.log("Not Empty", brakstak);
    return false;
  }
};
