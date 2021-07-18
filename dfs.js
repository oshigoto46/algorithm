function Node(node){
    this.node = node;
    this.childNodes = []
}

//         1     
//        /  \
//       5      2
//      /       /  \
//   6         4      3
//  /         / 
//  7        8

// 1->2->3->4->5 ->6

var n1 = new Node(1)
var n2 = new Node(2)
var n3 = new Node(3)
var n4 = new Node(4)
var n5 = new Node(5)
var n6 = new Node(6)
var n7 = new Node(7)
var n8 = new Node(8)

n1.childNodes.push(n2) // lilo 
n1.childNodes.push(n5) // 
n2.childNodes.push(n3)
n2.childNodes.push(n4)
n4.childNodes.push(n8)
n5.childNodes.push(n6)
n6.childNodes.push(n7)

ind =  0 ; // for the safety
result = []

function DFS(node){

    if(result.length === 0 ){ result.push(n1.node)}
    ind += 1              // for the safety
    if(ind > 10){return;} // for the safety

    console.log("===" + node.node  + "===" + node.childNodes.map(n=>n.node));

    if(node.childNodes.length === 0 ){ 
        // result.push(node)
        return
     }
   
  
   
    node.childNodes.forEach((_searchedNode) => {
        // 2,5
        // recursive
        console.log("_searchedNode"+ _searchedNode.node +"\n")
        result.push(_searchedNode.node)
        searchedNode = DFS(_searchedNode)
        

    })

    return result


}



console.log(DFS(n1))