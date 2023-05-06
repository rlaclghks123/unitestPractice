const Calculator = require('../Calculator.js');

let calculator;

describe('Add Test', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('AddTest : 50 + 30', () => {
    calculator.set(50);
    calculator.add(30);
    expect(calculator.get()).toBe(80);
  });

  test('AddTest : 50 + 100', () => {
    calculator.set(50);
    expect(() => calculator.add(100)).toThrowError('Value can not be greater than 100');
    expect(calculator.get()).toBe(50);
  });

  test('AddTest : 50 + 30', () => {
    calculator.set(50);
    expect(() => calculator.add(100)).toThrowError('Value can not be greater than 100');
    expect(calculator.get()).toBe(50);
  });
});

describe('Clear Test', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('AddTest : 50 + 30', () => {
    calculator.set(50);
    calculator.add(30);
    expect(calculator.get()).toBe(80);

    calculator.clear();
    expect(calculator.get()).toBe(0);
  });

  test('AddTest : 50 - 30', () => {
    calculator.set(50);
    calculator.subtract(30);
    expect(calculator.get()).toBe(20);

    calculator.clear();
    expect(calculator.get()).toBe(0);
  });
});

describe('Subtract Test', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Subtract Test : 50 - 30', () => {
    calculator.set(50);
    calculator.subtract(30);
    expect(calculator.get()).toBe(20);
  });

  test('AddTest : 50 - 50', () => {
    calculator.set(50);
    calculator.subtract(50);
    expect(calculator.get()).toBe(0);
  });

  test('AddTest : 50 - 100', () => {
    calculator.set(50);
    expect(() => calculator.subtract(100)).toThrowError(
      'The value should be greater than or equal to 0'
    );
    expect(calculator.get()).toBe(50);
  });
});

describe('Multiply Test', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Multiply Test : 3 * 5', () => {
    calculator.set(3);
    calculator.multiply(5);
    expect(calculator.get()).toBe(15);
  });

  test('Multiply Test : 3 * 0', () => {
    calculator.set(3);
    calculator.multiply(0);
    expect(calculator.get()).toBe(0);
  });

  test('Multiply Test : 3 * zero', () => {
    calculator.set(3);
    calculator.multiply('zero');
    expect(calculator.get()).toBeNaN();
  });
});

describe('Divide Test', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Divide Test : 8 / 4', () => {
    calculator.set(8);
    calculator.divide(4);
    expect(calculator.get()).toBe(2);
  });

  test('Divide Test : 2 / 4', () => {
    calculator.set(2);
    calculator.divide(4);
    expect(calculator.get()).toBe(0.5);
  });

  test('Divide Test : 2 / 0', () => {
    calculator.set(2);
    expect(() => calculator.divide(0)).toThrowError('The value cannot be zero');
    expect(calculator.get()).toBe(2);
  });

  test('Divide Test : 0 / 2', () => {
    calculator.clear();
    calculator.divide(2);
    expect(calculator.get()).toBe(0);
  });
});
