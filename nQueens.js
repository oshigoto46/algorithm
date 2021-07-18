class QueenPosition {
    constructor(rowIndex, columnIndex) {
      this.rowIndex = rowIndex;
      this.columnIndex = columnIndex;
    }
    get leftDiagonal() {
      return this.rowIndex - this.columnIndex;
    }
  
    get rightDiagonal() {
      return this.rowIndex + this.columnIndex;
    }
  }
  
  function isSafe(queensPositions, rowIndex, columnIndex) {
    const newQueenPosition = new QueenPosition(rowIndex, columnIndex);
  
    for (let queenIndex = 0; queenIndex < queensPositions.length; queenIndex += 1) {
      const currentQueenPosition = queensPositions[queenIndex];
  
      if (currentQueenPosition &&
         (newQueenPosition.columnIndex === currentQueenPosition.columnIndex
          || newQueenPosition.rowIndex === currentQueenPosition.rowIndex
          || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal
          || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal)) {
        return false;
      }
    }
    return true;
  }
  
  function nQueensRecursive(solutions, previousQueensPositions, queensCount, rowIndex) {
    const queensPositions = [...previousQueensPositions].map((queenPosition) => {
      return !queenPosition ? queenPosition : new QueenPosition(
        queenPosition.rowIndex,
        queenPosition.columnIndex,
      );
    });
  
    if (rowIndex === queensCount) {
      solutions.push(queensPositions);
      return;
    }
  
    for (let columnIndex = 0; columnIndex < queensCount; columnIndex += 1) {
      if (isSafe(queensPositions, rowIndex, columnIndex)) {
        queensPositions[rowIndex] = new QueenPosition(rowIndex, columnIndex);
  
        nQueensRecursive(solutions, queensPositions, queensCount, rowIndex + 1);
  
        queensPositions[rowIndex] = null;
      }
    }
    return;
  }
  
  function nQueens(queensCount) {
    let queensPositions = [];
    let solutions = [];
    nQueensRecursive(solutions, queensPositions, queensCount, 0);
  
    console.log('solutions', solutions);
    console.log('solutions length', solutions.length);
    return;
  }

  nQueens(4);
  