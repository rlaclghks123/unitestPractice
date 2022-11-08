const Stack = require("../stack");

describe("stack test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test("size test", () => {
    expect(stack.size()).toBe(0);
  });

  test("push test", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });
});
