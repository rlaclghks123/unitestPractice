const Calculator = require("../src/Calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  test("add test", () => {
    expect(cal.value).toBe(0);
  });

  test("set Test", () => {
    cal.set(50);
    expect(cal.value).toBe(50);
  });

  test("clear Test", () => {
    cal.set(50);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add Test", () => {
    cal.set(1);
    cal.add(50);
    expect(cal.value).toBe(51);
  });

  test("add Error Test", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  test("subtract Test", () => {
    cal.set(51);
    cal.subtract(50);
    expect(cal.value).toBe(1);
  });

  test("subtract Test", () => {
    cal.set(5);
    cal.multiply(5);
    expect(cal.value).toBe(25);
  });

  describe("divide", () => {
    test("0/0=== NAN", () => {
      cal.clear();
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    test("1/0=== Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
