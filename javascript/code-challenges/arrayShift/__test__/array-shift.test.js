const shiftArray = require("../array-shift.js");

describe("Array Shift 1", () => {
  test("should insert at into middle of an even array", () => {
    expect(shiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });

  test("should insert at into middle of an odd array", () => {
    expect(shiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });

  test("Array is size of 1", () => {
    expect(shiftArray([1], 5)).toStrictEqual([1]);
  });
  test("Array is size of null", () => {
    expect(shiftArray([], 5)).toStrictEqual([]);
  });
});
