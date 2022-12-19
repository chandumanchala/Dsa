const LinkedList = require("./tail");
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stac = new LinkedListStack();
console.log(stac.isEmpty());
stac.push(20);
stac.push(10);
stac.push(30);
console.log(stac.getSize());
stac.print();
console.log(stac.pop());
stac.print();
console.log(stac.peek());
