# N-Queens

A web-based implementation of the **N-Queens Problem** using **HTML, CSS, and JavaScript**. The project validates the input first and then solves the problem using the **Backtracking Algorithm**. The algorithm is based on the standard C++ implementation and has been converted into JavaScript for browser execution.

## Features

- Validate input before solving
- Solve the N-Queens problem using Backtracking
- Interactive chessboard visualization
- Responsive user interface
- Clear board functionality

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Algorithm

The project uses the **Backtracking Algorithm** to place **N Queens** on an **N × N** chessboard such that no two queens attack each other.

The implementation includes:
- Input Validation
- Safe Position Checking (`isSafe()`)
- Recursive Backtracking (`solveNQueens()`)
- Chessboard Visualization

> **Note:** The Backtracking logic is based on the standard C++ implementation and has been converted to JavaScript while preserving the same algorithm.

## Project Structure

```
N-Queens/
│── index.html
│── style.css
│── script.js
│── README.md
```

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser or run it using Live Server in VS Code.
4. Enter a valid value of **N**.
5. Click **Validate**.
6. Click **Solve** to generate the solution.
7. Click **Clear** to reset the board.

## Author

**Arjun Pandit**
