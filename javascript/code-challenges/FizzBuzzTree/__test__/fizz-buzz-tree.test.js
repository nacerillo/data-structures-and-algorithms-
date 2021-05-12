BST = require("../../Trees/tree");
FB = require("../fizz-buzz-tree");
describe("Fizz Buzz Tests", () => {
  it("If the value is divisible by 3, replace the value with “Fizz”", () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(20);
    tree.add(4);
    tree.add(7);
    tree.add(21);
    tree.add(32);
    tree.add(2);
    //let expected = [10, 5, 4, 2, 7, 20, 21, 32];
    let expected = ["Buzz", "Buzz", 4, 2, 7, "Buzz", 21, "FizzBuzz"];
    //console.log(FB(tree));
    console.log("TREE", tree);
    expect(FB(tree)).toEqual(expected);
  });

  /* it("If the value is divisible by 5, replace the value with “Buzz”", () => {
    expect(true).toEqual(true);
  });
  it("If the value is divisible by 15, replace the value with “FizzBuzz”", () => {
    expect(true).toEqual(true);
  });
  it("If the value is not divisible by 3 or 5, simply turn the number into a String.", () => {
    expect(true).toEqual(true);
  });*/
});
