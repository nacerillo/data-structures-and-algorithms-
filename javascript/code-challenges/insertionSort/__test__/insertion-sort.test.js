let insertSort = require("../insertion-sort.js");

describe("Insertion Sort: ", () => {
  test("should be able to sort a unsorted array", () => {
    expect(insertSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
