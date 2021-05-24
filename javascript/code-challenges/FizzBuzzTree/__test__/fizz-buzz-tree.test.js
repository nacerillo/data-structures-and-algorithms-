BST = require("../../Trees/tree");
FB = require("../fizz-buzz-tree");
describe("Fizz Buzz Tests", () => {
  it("If the value is divisible by 3, replace the value with “Fizz”", () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(30);
    tree.add(7);

    //let expected = [10, 5, 4, 2, 7, 20, 21, 32];
    //console.log(FB(tree));
    console.log("TREE", tree);
    let fbtree = FB(tree);
    console.log("FB", fbtree);
    expect(fbtree.root.data).toEqual("Buzz");
    expect(fbtree.root.left.data).toEqual("Fizz");
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
