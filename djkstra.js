// copy https://gist.github.com/stella-yc/49a7b96679ab3bf06e26421fc81b5636

// 
// 
//             (A) -- 4 --- C
//            /| \         \
//          5  |  \         6
//         /   8    \        \
//        /    |      - 2 ----(D) --1 -- finish
//       /                    |
// start  - 2--B- -  - 7 - - -
// 
// 

const problem = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
  };
  
  const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
      if (lowest === null || costs[node] < costs[lowest]) {
        if (!processed.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };
  
  // function that returns the minimum cost and path to reach Finish
  const dijkstra = (graph) => {
  
    // track lowest cost to reach each node
    const costs = Object.assign({finish: Infinity}, graph.start);
  
    // track paths
    const parents = {finish: null};
    for (let child in graph.start) {
      parents[child] = 'start';
    }
  
    // track nodes that have already been processed
    const processed = [];
  
    let node = lowestCostNode(costs, processed);
  
    while (node) {
      let cost = costs[node];
      let children = graph[node];

      console.log("==👇====")
      console.log("parents" + JSON.stringify(parents))
      console.log("children" + JSON.stringify(children))
      console.log("costs" + JSON.stringify(costs))
      console.log("===👆===")
      for (let n in children) {
        let newCost = cost + children[n];
        if (!costs[n]) {
          costs[n] = newCost;
          parents[n] = node;
        }
        if (costs[n] > newCost) {
          costs[n] = newCost;
          parents[n] = node;
        }
      }
      processed.push(node);
      node = lowestCostNode(costs, processed);
    }
  
    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
      optimalPath.push(parent);
      parent = parents[parent];
    }
    optimalPath.reverse();
  
    const results = {
      distance: costs.finish,
      path: optimalPath
    };
  
    return results;
  };
  
  console.log(dijkstra(problem));