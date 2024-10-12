class QueueUsingTwoStacks {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(x) {
    this.input.push(x);
  }

  dequeue() {
    this.peek();
    return this.output.pop();
  }

  peek() {
    if (this.output.length === 0) {
      while (this.input.length > 0) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }

  isEmpty() {
    return this.input.length === 0 && this.output.length === 0;
  }
}
