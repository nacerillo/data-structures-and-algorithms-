const BST = require("../tree");
/*describe("Binary Search Tree", () => {
  it("can be successfully instantiated as empty", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully instantiated with a single root", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully add a left child", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully add a right child", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully return a collection from an inOrder Traversal", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully return a collection from an preOrder Traversal", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully return a collection from an postOrder Traversal", () => {
    expect(true).toEqual(true);
  });
  it("can be successfully detect if a value exists in the tree", () => {
    expect(true).toEqual(true);
  });
});
*/
describe("BST TESTS", () => {
  it("can successfully instantiate an empty tree", () => {
    let tree = new BST();
    expect(tree.root).toEqual(null);
  });

  it("can successfully instantiate a tree with a single root node", () => {
    let tree = new BST();
    tree.add("root");
    expect(tree.root.data).toEqual("root");
  });

  it("can successfully add a left child and right child to a single root node", () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(20);
    expect(tree.root.left.data).toEqual(5);
    expect(tree.root.right.data).toEqual(20);
  });

  it("can successfully return a collection from a preorder traversal", () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(20);
    tree.add(4);
    tree.add(7);
    tree.add(21);
    tree.add(32);
    tree.add(2);
    let expected = [10, 5, 4, 2, 7, 20, 21, 32];
    expect(tree.preOrder()).toEqual(expected);
  });

  it("can successfully return a collection from a inorder traversal", () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(20);
    tree.add(4);
    tree.add(7);
    tree.add(21);
    tree.add(32);
    tree.add(2);
    let expected = [2, 4, 5, 7, 10, 20, 21, 32];
    expect(tree.inOrder()).toEqual(expected);
  });

  it("can successfully return a collection from a postorder traversal", () => {
    let tree = new BST();
    tree.add(10);
    tree.add(5);
    tree.add(20);
    tree.add(4);
    tree.add(7);
    tree.add(21);
    tree.add(32);
    tree.add(2);
    let expected = [2, 4, 7, 5, 32, 21, 20, 10];
    expect(tree.postOrder()).toEqual(expected);
  });
});
