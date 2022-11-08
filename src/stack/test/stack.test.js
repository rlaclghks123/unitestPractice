const Stack = require("../stack");

describe("stack test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test("size test", () => {
    expect(stack.size()).toBe(0);
  });
});
