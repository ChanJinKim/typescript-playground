class Stack<T> {
  data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  // pop(): T {
  //   return this.data.pop();
  // }
}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();
numberStack.push(1);
stringStack.push('a');
console.log(numberStack.data);
console.log(stringStack.data);
