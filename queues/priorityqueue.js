class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let contain = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    // return the dequeued element
    // and remove it.
    // if the queue is empty
    // returns Underflow
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    // returns the highest priority element
    // in the Priority queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  rear() {
    // returns the lowest priority
    // element of the queue
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[this.items.length - 1];
  }
  printPQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }
}

const priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty()); //true
priorityQueue.enqueue("chandu", 2);
priorityQueue.enqueue("sunny", 1);
console.log(priorityQueue.printPQueue());

priorityQueue.enqueue("hemu", 1);
priorityQueue.enqueue("azad", 2);
priorityQueue.enqueue("sai", 3);
console.log(priorityQueue.dequeue().element);
console.log(priorityQueue.printPQueue());
