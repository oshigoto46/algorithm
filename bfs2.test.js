function Node(node){
    this.childNode = []  // type Node
    this.node = node
}


//         1     
//        /  \
//       5      2
//      /       /  \
//   6         4      3

//   1->2->5->3->4->6

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);

//         1     node
//        /  \
//       5      2
//      /       /  \
//   6         4      3


n1.childNode.push(n2,n5)
n2.childNode.push(n3,n4)
n5.childNode.push(n6)

//   1->2->5->3->4->6

function bfs(node){

    const queue = [node] // Node type Array
    let   result = [];

    while(queue.length){
        const first = queue.shift() //.splice(0,1) //  node 1 childeNode (node 2 node 5)
        console.log(first)
        console.log(first.childNode)
        result.push(first.node)         // 
        first.childNode.forEach(        //  node 2 childNode (node 3 node 4)
                                        //  node 5 childNode (node 6 )
            c => queue.push(c)
        )
    }
    return result;
}

console.log(bfs(n1))