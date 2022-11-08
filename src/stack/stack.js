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

  pop() {
    if (this.array.length === 0) {
      throw new Error("when stack is Empty, can not use pop()");
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error("when peek is Empty, can not use peek()");
    }

    return this.array[this.array.length - 1];
  }
}
module.exports = Stack;
