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

  describe("pop test", () => {
    test("when array is empty, pop test", () => {
      expect(() => {
        stack.pop();
      }).toThrow("when stack is Empty, can not use pop()");
    });

    test("when stack is not empty, pop test", () => {
      stack.push(1);
      expect(stack.pop()).toBe(1);
      expect(stack.size()).toBe(0);
    });
  });
});
