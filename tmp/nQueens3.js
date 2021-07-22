function generateBoard(n){ 
  var board = []
  for(i = 0 ; i < n ; i ++){
    board[i] = []
    for( j = 0 ; j < n ; j ++){
        board[i][j] = 0
    }
  }
  return board
}

//     col   0        1         2        3
// row    0 b[0][0] b[0][1] b[0][2]   b[0][3] ↓  b[row][col]
//        1　　　　　　        　　              ↓
//        2                    ◎
//        3

const N = 4
let board = (generateBoard(N))
// board[2][2] = 1

board[2][2] = 1 

console.log(board)

// recurseNQ(0)
function recurseNQ(board, row){
    
    if(row == N) { return true } 

    for(let i=0 ; i< N ; i++){
        
         if(isSafe(board,i,row)) // 
         {
            board[row][i] = 1;
            if(recurseNQ(board ,row +1)){

            }
         }
    }
}

function isSafe(board,row,col){
    // ↓  board[col][row]
     for(let row =0 )

    // ➘


    // ↙
 
}

