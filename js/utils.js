'use strict'
function getEmptyCell (board) {
    var emptycell= []
    for (var i=0;i<gBoard.length; i++) {
        for ( var j=0;j<gBoard[0].length; j++){
             var currentCell = board [i][j]
             if (currentCell === EMPTY)
             emptycell.push({i,j})
        }
       
    }

}
function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function showModal() {
    const elModal = document.querySelector('.modal')
    elModal.classList.remove('hide')
}

function hideModal() {
    const elModal = document.querySelector('.modal')
    elModal.classList.add('hide')
}
// function renderBoard(board) {
//     var strHTML = ''
//     for (var i = 0; i < board.length; i++) {
//         strHTML += '<tr>'
//         for (var j = 0; j < board[0].length; j++) {
//             const currCell = board[i][j]
//             var cellClass = getClassName({ i, j }) + ' '
//             cellClass += (currCell.type === WALL) ? 'wall' : 'floor'
//             strHTML += `<td class="cell ${cellClass}" onclick="onMoveTo(${i},${j})" >`

//             if (currCell.gameElement === GAMER) {
//                 strHTML += GAMER_IMG
//             } else if (currCell.gameElement === BALL) {
//                 strHTML += BALL_IMG
//             }

//             strHTML += '</td>'
//         }
//         strHTML += '</tr>'
//     }
//     // console.log('strHTML', strHTML)

//     const elBoard = document.querySelector('.board')
//     elBoard.innerHTML = strHTML
// }

// function buildBoard() {
//     // Put FLOOR everywhere and WALL at edges
//     const rowCount = 10
//     const colCount = 12
//     const board = []
//     for (var i = 0; i < rowCount; i++) {
//         board[i] = []
//         for (var j = 0; j < colCount; j++) {
//             board[i][j] = { type: FLOOR, gameElement: null }
//             if (i === 0 || i === rowCount - 1 || j === 0 || j === colCount - 1) {
//                 board[i][j].type = WALL
//             }
//         }
//     }
// }
// function countNeighbors(cellI, cellJ, mat) {
//     var neighborsCount = 0
//     for (var i = cellI - 1; i <= cellI + 1; i++) {
//         if (i < 0 || i >= mat.length) continue
//         for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//             if (i === cellI && j === cellJ) continue
//             if (j < 0 || j >= mat[i].length) continue
//             if (mat[i][j] === LIFE || mat[i][j] === SUPER_LIFE) neighborsCount++
//         }
//     }
//     return neighborsCount
// }