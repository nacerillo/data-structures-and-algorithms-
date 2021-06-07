const repeatedWords = require("../repeated-word.js");
describe("Repeated Word Test", () => {
  it("Will return the first word that is repeated in a string", () => {
    let test =
      "Neither a borrower nor a lender be, For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry.";
    expect(repeatedWords(test)).toEqual("a");
  });
  it("Will return an Excpetion if string is empty", () => {
    let test = "";
    expect(repeatedWords(test)).toEqual("Exception");
  });
  it("Will return No Repeats if the string does not have any repeating words", () => {
    let test = "Will the real Slim Shady please stand up?";
    expect(repeatedWords(test)).toEqual("No Repeats");
  });
});
