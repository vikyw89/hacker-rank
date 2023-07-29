

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // validate col & row
    
    for (let col = 0; col < board.length; col++) {
        let rowHash = {}
        let colHash = {}
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== "." && board[row][col] in rowHash) {
                return false
            }
            rowHash[board[row][col]] = true
            
            if (board[col][row] !== "." && board[col][row] in colHash) {
                return false
            }
            
            colHash[board[col][row]] = true
        }
    }
    
    // validate grid
    for (let col = 0; col < board.length; col += 3) {
        for (let row = 0; row < board.length; row += 3) {
            // subgrid
            let subGridHash = {}
            for (let subrow = row; subrow < row+3; subrow++) {
                for (let subcol = col; subcol < col+3; subcol++) {
                    if (board[subrow][subcol] !== "." && board[subrow][subcol] in subGridHash) {
                        return false
                    }
                    
                    subGridHash[board[subrow][subcol]] = true
                }
            }
        }
    }
    return true
};