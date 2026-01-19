// File:sudoku.js
// Author: Joyce Fu
// Student ID: 923398486
// GitHub: fufu911219

// Define the initial puzzle for the Sudoku game
const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Define the solution for the Sudoku puzzle
const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// Get the container element where the Sudoku board will be displayed
const container = document.getElementById('sudoku-container');
let playerScore = 19; // Initialize the player's score

// Function to create the initial Sudoku board
function createSudokuBoard() {
  playerScore = 19; // Reset the player's score
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // Create a cell element for each Sudoku grid cell
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.contentEditable = true;
      container.appendChild(cell);

      // Populate the cell with the initial puzzle values
      if (puzzle[i][j] !== 0) {
        cell.innerText = puzzle[i][j];
        cell.contentEditable = false;
      }
    }
  }
}

// Function to check the player's solution
function checkSolution() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (parseInt(cell.innerText) === solution[row][col]) {
      // If the cell value matches the solution, mark it as correct
      cell.classList.remove('incorrect');
      cell.classList.add('correct');
      playerScore += 1; // Increment the player's score for a correct cell
    } else {
      // If the cell value does not match the solution, mark it as incorrect
      cell.classList.remove('correct');
      cell.classList.add('incorrect');
    }
  });
  // Display the final score in an alert
  alert(`Your final score: ${playerScore}`);
  playerScore = 19; // Reset the player's score for the next game
}

// Function to show the solution to the player
function showSolution() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    // Display the solution value in each cell
    cell.innerText = solution[row][col];
    cell.classList.remove('incorrect', 'correct'); // Remove any styling from previous checks
    cell.contentEditable = false; // Disable editing after showing the solution
  });
}

// Call the function to create the Sudoku board when the page loads
createSudokuBoard();
