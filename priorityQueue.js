class PriorityQueue {
    constructor() {
      this.values = [];
    }
    
    enqueue(value, priority) {
      // create new node with value and priority arguments
      let newNode = new Node(value, priority);
      // push the new node into the values array
      this.values.push(newNode);
  
      // store the index and the node of the new node
      let index = this.values.length - 1;
      const element = this.values[index];
      
      // initialize a while loop to run while inserted node is not at the root
      while(index > 0) {
        // store the index and node of the parent
        let parentIndex = Math.floor((index - 1) / 2);
        const parent = this.values[parentIndex];
        
        // compare the priority of the inserted and parent
        if(element.priority >= parent.priority) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
      return this.values;
    }
  }
  
  class Node {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
    }
  }

pq =   new PriorityQueue()
pq.enqueue(1,100)
console.log(pq.enqueue(2,50))
