class Node {

    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  
  class LinkedList {
      constructor() {
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        push(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length +=1;
        if(this.tail === null) {
            this.tail = newNode;
        }
    }
  }


  let lnkList = new LinkedList();
  console.log(lnkList);
  lnkList.push("first");
  lnkList.push("second");
  lnkList.push("third");
  console.log(lnkList);