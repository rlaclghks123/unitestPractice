class Calculator {
  constructor() {
    this.value = 0;
  }

  get() {
    return this.value;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num) {
    const sum = this.value + num;
    if (sum > 100) {
      throw new Error('Value can not be greater than 100');
    }
    this.value = sum;
  }

  subtract(num) {
    let subtract = this.value - num;

    if (subtract < 0) {
      throw new Error('The value should be greater than or equal to 0');
    }
    this.value = subtract;
  }

  multiply(num) {
    this.value = this.value * num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error('The value cannot be zero');
    }
    this.value = this.value / num;
  }
}

module.exports = Calculator;
