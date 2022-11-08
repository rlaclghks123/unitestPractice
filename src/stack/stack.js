class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    return this.array.push(item);
  }
}
module.exports = Stack;
