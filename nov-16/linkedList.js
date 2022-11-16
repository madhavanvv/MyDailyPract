class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addAtHead(d) {
    let newNode = new Node(d);
    newNode.next = this.head;
    this.head = newNode;
  }
  llDisplay() {
    console.log(this.head);
  }
}

let ll1 = new LinkedList();
ll1.addAtHead(5);
ll1.addAtHead(4);
ll1.addAtHead(3);
ll1.addAtHead(2);
ll1.llDisplay();