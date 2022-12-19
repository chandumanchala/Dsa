class stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const Stack = new stack();
console.log(Stack.isEmpty()); //true
Stack.push(10);
Stack.push(20);
Stack.push(30);
console.log(Stack.size());
Stack.print();
console.log(Stack.pop());
console.log(Stack.peek());
