// ===============================
// N-Queens Solver
// Validate First -> Then Solve
// Backtracking Algorithm
// ===============================

const validateBtn = document.getElementById("validateBtn");
const solveBtn = document.getElementById("solveBtn");
const clearBtn = document.getElementById("clearBtn");

const nInput = document.getElementById("nValue");

const message = document.getElementById("message");

const boardContainer = document.getElementById("boardContainer");

let isValidated = false;

// -------------------------------
// Validate N
// -------------------------------

function validateBoard() {

    let n = Number(nInput.value);

    if (isNaN(n)) {

        message.style.color = "red";
        message.innerHTML = "Please enter a value.";

        isValidated = false;

        return;

    }

    if (n < 4 || n > 12) {

        message.style.color = "red";

        message.innerHTML =
            "Enter a value between 4 and 12.";

        isValidated = false;

        return;

    }

    message.style.color = "green";

    message.innerHTML =
        "Validation Successful ✔";

    isValidated = true;

}

// -------------------------------
// Check Safe Position
// (C++ Logic converted to JS)
// -------------------------------

function isSafe(board, row, col, n) {

    // Same Column

    for (let i = 0; i < row; i++) {

        if (board[i] === col) {

            return false;

        }

    }

    // Left Diagonal

    for (let i = 0; i < row; i++) {

        if (Math.abs(i - row) === Math.abs(board[i] - col)) {

            return false;

        }

    }

    return true;

}

// -------------------------------
// Recursive Backtracking
// -------------------------------

function solveNQueens(board, row, n) {

    if (row === n) {

        return true;

    }

    for (let col = 0; col < n; col++) {

        if (isSafe(board, row, col, n)) {

            board[row] = col;

            if (
                solveNQueens(
                    board,
                    row + 1,
                    n
                )
            ) {

                return true;

            }

            board[row] = -1;

        }

    }

    return false;

}

// -------------------------------
// Draw Chess Board
// -------------------------------

function drawBoard(board, n) {

    boardContainer.innerHTML = "";

    const table = document.createElement("table");

    for (let row = 0; row < n; row++) {

        const tr = document.createElement("tr");

        for (let col = 0; col < n; col++) {

            const td = document.createElement("td");

            if ((row + col) % 2 === 0) {

                td.className = "white";

            } else {

                td.className = "black";

            }

            if (board[row] === col) {

                td.innerHTML = "♛";

            }

            tr.appendChild(td);

        }

        table.appendChild(tr);

    }

    boardContainer.appendChild(table);

}

// -------------------------------
// Solve Button
// -------------------------------

function solveBoard() {

    if (!isValidated) {

        message.style.color = "red";

        message.innerHTML =
            "Please Validate First.";

        return;

    }

    let n = Number(nInput.value);

    let board = new Array(n).fill(-1);

    let solved = solveNQueens(board, 0, n);

    if (solved) {

        drawBoard(board, n);

        message.style.color = "green";

        message.innerHTML =
            "Solution Found Successfully ✔";

    }

    else {

        boardContainer.innerHTML = "";

        message.style.color = "red";

        message.innerHTML =
            "No Solution Exists.";

    }

}

// -------------------------------
// Clear Button
// -------------------------------

function clearBoard() {

    nInput.value = "";

    boardContainer.innerHTML = "";

    message.innerHTML = "";

    isValidated = false;

}

// -------------------------------
// Event Listeners
// -------------------------------

validateBtn.addEventListener(
    "click",
    validateBoard
);

solveBtn.addEventListener(
    "click",
    solveBoard
);

clearBtn.addEventListener(
    "click",
    clearBoard
);