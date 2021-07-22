function Node(key){
    this.children = [] //Use an array to store child nodes
    this.key = key //Current node number
}

//Create node
let n1 = new Node(1),
n2 = new Node(2),
n3 = new Node(3),
n4 = new Node(4),
n5 = new Node(5),
n6 = new Node(6);

//Build the tree
n1.children.push(n2, n5)
n2.children.push(n3, n4)
n5.children.push(n6)

function bfs(node){
    const queue = [node] //Create a queue
    let   result = []
    while(queue.length){ //The queue has elements
            const first = queue.shift() //first out
            // console.log(queue)
            result.push(first.key)
            console.log(first.key) //Dequeue element number
            first.children.forEach(
                    child => queue.push(child) //The child node enters the queue
            )
    }
    
    return result;
}

console.log(bfs(n1))

/// ---
var chai  = require("chai");
const { assert } = chai;
  

describe('bfs', function(){
  it('bfs simple result', function(){
      assert.deepEqual(bfs(n1),[1,2,5,3,4,6]);
  });
});