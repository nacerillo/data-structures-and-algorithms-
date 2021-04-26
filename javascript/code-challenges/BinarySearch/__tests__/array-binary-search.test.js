const binarySearch = require("../array-binary-search.js");

describe("Array Shift 1", () => {
  test("Should return index of the element if it exists in the array", () => {
    expect(
      binarySearch([1, 3, 7, 13, 20, 25, 42, 56, 97], 0, 8, 25)
    ).toStrictEqual(5);
  });

  test("Should return -1 if element cannot be found", () => {
    expect(
      binarySearch([1, 3, 7, 13, 20, 25, 42, 56, 97], 0, 8, 100)
    ).toStrictEqual(-1);
  });
});
