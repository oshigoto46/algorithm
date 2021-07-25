class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
  　// 要素の追加
    push(item) {
      let heap = this.heap;
      let i = heap.length++;
      let j;
  
      while(i) {
        j = Math.floor((i - 1) / 2);
        if(heap[j] <= item) break;
        heap[i] = heap[j]
        i = j;
      }
  
      heap[i] = item;
    }
  
    // 最大値の削除
    pop() {
      let heap = this.heap;
      let top = heap[0];
      let popped = heap.pop();
  
      let i = 0;
      let k = Math.floor(heap.length / 2);
      let j;
  
      while(i < k) {
        j = (i * 2) + 1;
        if(heap[j+1] < heap[j]) ++j;
  
        if(popped <= heap[j]) break;
  
        heap[i] = heap[j];
  
        i = j;
      }
  
      if(heap.length) {
        heap[i] = popped;
      }
  
      return top;
    }
  
    // 要素数を返す
    size() {
      return this.heap.length;
    }
  
    // 先頭を返す
    top() {
      return this.heap[0];
    }
  }
  
  // 使用例
  const pq = new PriorityQueue();
  pq.push(10);
  pq.push(30);
  pq.push(2);
  pq.push(-10);
  
  console.log(pq.top()); // 30
  console.log(pq.pop()); // 30
  console.log(pq.top()); // 10