"use strict";
let qs = require("./quick-sort.js");

describe("Quick Sort", () => {
  it("can sort", () => {
    let test = [8, 4, 23, 42, 16, 15];
    console.log(qs(test, 0, test.length - 1));
    expect(qs(test)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
