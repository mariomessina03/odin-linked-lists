class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;

    this.head = newNode;
  }

  size() {
    let counter = 0;
    let current = this.head;

    while (current !== null) {
      counter++;
      current = current.nextNode;
    }
    return counter;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;

    if (current === null) {
      return null;
    }

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0) {
      return "Index cannot be negative";
    }

    let counter = 0;
    let current = this.head;

    while (current !== null) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.nextNode;
    }
    return "Linked list shorter than index given";
  }

  pop() {
    if (this.head === null) return null;
    if (this.head.nextNode === null) {
      this.head = null;
    }

    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    if (this.head === null) return false;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.head === null) return null;

    let counter = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return counter;
      counter++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    if (this.head === null) return console.log("null");

    let string = "";
    let current = this.head;
    while (current !== null) {
      string += `( ${current.value} ) ->`;
      current = current.nextNode;
    }
    string += "null";
    console.log(string);
  }

  // Extra Functions

  insertAt(value, index) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }

    let counter = 0;
    let current = this.head;
    let newNode = new Node(value);

    while (current !== null) {
      if (counter === index) {
        newNode.nextNode = current;
        let prev = this.head;
        while (prev !== null && prev.nextNode !== current) {
          prev = prev.nextNode;
        }
        if (prev !== null) {
          prev.nextNode = newNode;
        }
        return;
      }
      counter++;
      current = current.nextNode;
    }

    let prev = this.head;
    while (prev !== null && prev.nextNode !== null) {
      prev = prev.nextNode;
    }
    if (prev !== null) {
      prev.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index <= 0) {
      this.head = this.head.nextNode;
      return;
    }

    let counter = 0;
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (counter === index) {
        prev.nextNode = current.nextNode;
        return;
      }
      prev = current;
      current = current.nextNode;
      counter++;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insrtAt(17, 1);
list.insertAt(1700, 1);
list.removeAt(4);
console.log(list.toString());
