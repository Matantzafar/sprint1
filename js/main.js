"use strict";

const MINE = '💣'
const EMPTYCELL = ' '
const FLAG = '🏴'

var gBoard

var gLevel = {
    size: 4,
    mines: 2
}

var gGame

function onInit() {
    gGame = {
        isOn: false,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }
    gBoard = buildBoard()
    renderBoard()
}

function buildBoard() {
    const board = []
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = []
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }
    board[2][1].isMine = true
    board[0][0].isMine = true
    return board
}

function renderBoard() {
    var strHTML = ''
    for (let i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (let j = 0; j < gBoard[0].length; j++) {
            const cell = ""
            const className = `cell cell-${i}-${j}`
            strHTML += `<td class="${className}" onclick="onCellClicked(${i},${j})" oncontextmenu="onCellMarked(event,${i},${j})"></td>`
        }
        strHTML += '</tr>'
    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}



function renderCell(location, item) {
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = item
}


