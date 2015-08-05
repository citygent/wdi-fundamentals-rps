var checkerboard = [["yolo","R","B",null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,"R",null,null,null],
                    ["B",null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    checkerboard[row][col] = player;
    return checkerboard;
}

function getPieceAt(row, col) {
    return checkerboard[row][col];
}

function clearBoard(board) {
    function clear(cell) {
    cell = null;
    return cell;
    }
    function clearRow(row) {
    var clearedRow = row.map(clear);
    return clearedRow;
    }
    for (i=0; i < board.length; i++){
    var clearedBoard = board.map(clearRow);
    checkerboard = clearedBoard;
    return checkerboard;
    // comment out above two lines if using: return clearedBoard;
    }
}
//=====================all good so far? ====================

function makeOffsetRow(row, player) {
    for(i=0; i < row.length; i++){
        if (i%2 !== 0){
            row[i] = player;
        }
    }
}
function makeRegularRow(row, player) {
    for(i=0; i < row.length; i++){
        if (i%2 === 0){
            row[i] = player;
        }
    }
}
//!! Above will eventually go into below functions.
//Want to find a better way. Should be able to use setSquare function already defined above.
//Super frustrating can't make it work this evening.

function setUpRed() {
    // This function will set up the red pieces on our checkerboard by setting the value of each cell that should hold a red piece to 'R'. 
    // For the purposes of this exercise. Assume that the red pieces should be laid out at the 'top' of the board.


}


function setUpBlack() {
    //This function should work similarly to setUpRed, placing black pieces ('B') on the board.

}

/*
R O R O R O R O
O R O R O R O R
R O R O R O R O
O O O O O O O O
O O O O O O O O
O B O B O B O B
B O B O B O B O
O B O B O B O B
*/
//======================================================================================================
//======================================================================================================