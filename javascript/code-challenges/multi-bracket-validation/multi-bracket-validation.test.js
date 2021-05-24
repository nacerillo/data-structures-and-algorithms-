const bracketValidator = require("./multi-bracket-validation");

describe("Braket Validation", () => {
  xit("Returns true on a valid braket string", () => {
    let b1 = "({[]})";
    let b2 = "(){}[]";
    let b3 = "()[[Extra Characters]]";
    expect(bracketValidator(b1)).toEqual(true);
    expect(bracketValidator(b2)).toEqual(true);
    expect(bracketValidator(b3)).toEqual(true);
  });

  it("Returns false on an invalid braket string", () => {
    let b4 = "[({}]";
    let b5 = "(](";
    let b6 = "{(})";
    let b7 = "[";
    let b8 = "}";
    let b9 = "[}";
    expect(bracketValidator(b4)).toEqual(false);
    expect(bracketValidator(b5)).toEqual(false);
    expect(bracketValidator(b6)).toEqual(false);
    expect(bracketValidator(b7)).toEqual(false);
    expect(bracketValidator(b8)).toEqual(false);
    expect(bracketValidator(b9)).toEqual(false);
  });
});
