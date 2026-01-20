// File: sudoku.js
// Author: Joyce Fu
// Student ID: 923398486
// GitHub: fufu911219

// 1. Puzzle Database (Organized by index ranges)
const puzzles = [
  // Index 0-4: Easy
  {
    puzzle: [[5, 3, 0, 0, 7, 0, 0, 0, 0], [6, 0, 0, 1, 9, 5, 0, 0, 0], [0, 9, 8, 0, 0, 0, 0, 6, 0], [8, 0, 0, 0, 6, 0, 0, 0, 3], [4, 0, 0, 8, 0, 3, 0, 0, 1], [7, 0, 0, 0, 2, 0, 0, 0, 6], [0, 6, 0, 0, 0, 0, 2, 8, 0], [0, 0, 0, 4, 1, 9, 0, 0, 5], [0, 0, 0, 0, 8, 0, 0, 7, 9]],
    solution: [[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]]
  },
  {
    puzzle: [[0, 0, 0, 2, 6, 0, 7, 0, 1], [6, 8, 0, 0, 7, 0, 0, 9, 0], [1, 9, 0, 0, 0, 4, 5, 0, 0], [8, 2, 0, 1, 0, 0, 0, 4, 0], [0, 0, 4, 6, 0, 2, 9, 0, 0], [0, 5, 0, 0, 0, 3, 0, 2, 8], [0, 0, 9, 3, 0, 0, 0, 7, 4], [0, 4, 0, 0, 5, 0, 0, 3, 6], [7, 0, 3, 0, 1, 8, 0, 0, 0]],
    solution: [[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]]
  },
  {
    puzzle: [[1, 0, 0, 4, 8, 9, 0, 0, 6], [7, 3, 0, 0, 0, 0, 0, 4, 0], [0, 0, 0, 0, 0, 1, 2, 9, 5], [0, 0, 7, 1, 2, 0, 6, 0, 0], [5, 0, 0, 7, 0, 3, 0, 0, 8], [0, 0, 6, 0, 9, 5, 7, 0, 0], [9, 1, 4, 6, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 3, 7], [8, 0, 0, 5, 1, 2, 0, 0, 4]],
    solution: [[1, 5, 2, 4, 8, 9, 3, 7, 6], [7, 3, 9, 2, 5, 6, 8, 4, 1], [4, 6, 8, 3, 7, 1, 2, 9, 5], [3, 8, 7, 1, 2, 4, 6, 5, 9], [5, 9, 1, 7, 6, 3, 4, 2, 8], [2, 4, 6, 8, 9, 5, 7, 1, 3], [9, 1, 4, 6, 3, 7, 5, 8, 2], [6, 2, 5, 9, 4, 8, 1, 3, 7], [8, 7, 3, 5, 1, 2, 9, 6, 4]]
  },
  // Index 5-7: Medium
  {
    puzzle: [[0, 2, 0, 6, 0, 8, 0, 0, 0], [5, 8, 0, 0, 0, 9, 7, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 0], [3, 7, 0, 0, 0, 0, 5, 0, 0], [6, 0, 0, 0, 0, 0, 0, 0, 4], [0, 0, 8, 0, 0, 0, 0, 1, 3], [0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 9, 8, 0, 0, 0, 3, 6], [0, 0, 0, 3, 0, 6, 0, 9, 0]],
    solution: [[4, 2, 7, 6, 1, 8, 3, 5, 9], [5, 8, 3, 2, 4, 9, 7, 6, 1], [9, 6, 1, 5, 3, 7, 2, 8, 4], [3, 7, 4, 1, 8, 2, 5, 9, 6], [6, 1, 5, 9, 7, 3, 8, 2, 4], [2, 9, 8, 4, 6, 5, 7, 1, 3], [8, 3, 6, 9, 2, 1, 4, 7, 5], [7, 5, 9, 8, 4, 4, 1, 3, 6], [1, 4, 2, 3, 5, 6, 8, 9, 7]]
  },
  {
    puzzle: [[0, 0, 0, 6, 0, 0, 4, 0, 0], [7, 0, 0, 0, 0, 3, 6, 0, 0], [0, 0, 0, 0, 9, 1, 0, 8, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 0, 1, 8, 0, 0, 0, 3], [0, 0, 0, 3, 0, 6, 0, 4, 5], [0, 4, 0, 2, 0, 0, 0, 6, 0], [9, 0, 3, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0]],
    solution: [[5, 8, 9, 6, 7, 2, 4, 3, 1], [7, 1, 2, 8, 4, 3, 6, 5, 9], [3, 6, 4, 5, 9, 1, 7, 8, 2], [4, 3, 8, 9, 5, 7, 2, 1, 6], [6, 5, 7, 1, 8, 4, 9, 2, 3], [2, 9, 1, 3, 2, 6, 8, 4, 5], [1, 4, 5, 2, 3, 9, 5, 6, 8], [9, 7, 3, 4, 1, 8, 5, 2, 6], [8, 2, 6, 7, 6, 5, 1, 9, 4]]
  },
  {
    puzzle: [[0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 6, 0, 0, 0, 0, 3], [0, 7, 4, 0, 8, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0, 2], [0, 8, 0, 0, 4, 0, 0, 1, 0], [6, 0, 0, 5, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 7, 8, 0], [5, 0, 0, 0, 0, 9, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 4, 0]],
    solution: [[8, 2, 6, 3, 9, 1, 4, 5, 7], [1, 5, 9, 6, 7, 4, 8, 2, 3], [3, 7, 4, 2, 8, 5, 1, 6, 9], [4, 9, 5, 1, 6, 3, 7, 8, 2], [2, 8, 3, 7, 4, 9, 5, 1, 6], [6, 1, 7, 5, 2, 8, 3, 9, 4], [9, 4, 2, 8, 1, 6, 7, 8, 5], [5, 3, 8, 4, 5, 9, 2, 7, 1], [7, 6, 1, 9, 3, 2, 5, 4, 8]]
  },
  // Index 8-10: Hard
  {
    puzzle: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 8, 5], [0, 0, 1, 0, 2, 0, 0, 0, 0], [0, 0, 0, 5, 0, 7, 0, 0, 0], [0, 0, 4, 0, 0, 0, 1, 0, 0], [0, 9, 0, 0, 0, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0, 0, 7, 3], [0, 0, 2, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 9]],
    solution: [[9, 8, 5, 1, 7, 4, 3, 6, 2], [2, 4, 6, 9, 5, 3, 7, 8, 5], [3, 7, 1, 8, 2, 6, 9, 5, 4], [1, 2, 8, 5, 3, 7, 4, 9, 6], [7, 5, 4, 2, 6, 9, 1, 3, 8], [6, 9, 3, 4, 8, 1, 2, 5, 7], [5, 1, 9, 6, 2, 8, 4, 7, 3], [4, 3, 2, 7, 1, 5, 8, 9, 6], [8, 6, 7, 3, 4, 2, 5, 1, 9]]
  },
  {
    puzzle: [[8, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 6, 0, 0, 0, 0, 0], [0, 7, 0, 0, 9, 0, 2, 0, 0], [0, 5, 0, 0, 0, 7, 0, 0, 0], [0, 0, 0, 0, 4, 5, 7, 0, 0], [0, 0, 0, 1, 0, 0, 0, 3, 0], [0, 0, 1, 0, 0, 0, 0, 6, 8], [0, 0, 8, 5, 0, 0, 0, 1, 0], [0, 9, 0, 0, 0, 0, 4, 0, 0]],
    solution: [[8, 1, 2, 7, 5, 3, 6, 4, 9], [9, 4, 3, 6, 8, 2, 1, 7, 5], [6, 7, 5, 4, 9, 1, 2, 8, 3], [1, 5, 4, 2, 3, 7, 8, 9, 6], [3, 6, 9, 8, 4, 5, 7, 2, 1], [2, 8, 7, 1, 6, 9, 5, 3, 4], [5, 2, 1, 9, 7, 4, 3, 6, 8], [4, 3, 8, 5, 2, 6, 9, 1, 7], [7, 9, 6, 3, 1, 8, 4, 5, 2]]
  },
  {
    puzzle: [[2, 0, 0, 3, 0, 0, 0, 0, 0], [8, 0, 4, 0, 6, 2, 0, 0, 3], [0, 1, 3, 8, 0, 0, 2, 0, 0], [0, 0, 0, 0, 2, 0, 3, 9, 0], [5, 0, 7, 0, 0, 0, 6, 0, 2], [0, 3, 2, 0, 8, 0, 0, 0, 0], [0, 0, 9, 0, 0, 5, 1, 4, 0], [6, 0, 0, 2, 4, 0, 9, 0, 7], [0, 0, 0, 0, 0, 9, 0, 0, 5]],
    solution: [[2, 6, 5, 3, 9, 1, 7, 8, 4], [8, 7, 4, 5, 6, 2, 9, 1, 3], [9, 1, 3, 8, 7, 4, 2, 5, 6], [4, 8, 6, 7, 2, 5, 3, 9, 1], [5, 9, 7, 4, 1, 3, 6, 8, 2], [1, 3, 2, 9, 8, 6, 5, 7, 4], [7, 2, 9, 6, 3, 5, 1, 4, 8], [6, 5, 1, 2, 4, 8, 9, 3, 7], [3, 4, 8, 1, 7, 9, 6, 2, 5]]
  },
  // Index 11-12: Super Hard
  {
    puzzle: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 8, 5], [0, 0, 1, 0, 2, 0, 0, 0, 0], [0, 0, 0, 5, 0, 7, 0, 0, 0], [0, 0, 4, 0, 0, 0, 1, 0, 0], [0, 9, 0, 0, 0, 0, 0, 0, 0], [5, 0, 0, 0, 0, 0, 0, 7, 3], [0, 0, 2, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 9]],
    solution: [[9, 8, 5, 1, 7, 4, 3, 6, 2], [2, 4, 6, 9, 5, 3, 7, 8, 5], [3, 7, 1, 8, 2, 6, 9, 5, 4], [1, 2, 8, 5, 3, 7, 4, 9, 6], [7, 5, 4, 2, 6, 9, 1, 3, 8], [6, 9, 3, 4, 8, 1, 2, 5, 7], [5, 1, 9, 6, 2, 8, 4, 7, 3], [4, 3, 2, 7, 1, 5, 8, 9, 6], [8, 6, 7, 3, 4, 2, 5, 1, 9]]
  },
  {
    puzzle: [[0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0, 9, 4, 0], [0, 0, 3, 0, 0, 0, 0, 0, 5], [0, 9, 0, 3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 8, 0, 7, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [7, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 5, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]],
    solution: [[9, 5, 8, 4, 6, 7, 1, 3, 2], [2, 1, 7, 8, 3, 5, 9, 4, 6], [4, 6, 3, 9, 2, 1, 8, 7, 5], [7, 9, 4, 3, 5, 2, 6, 1, 8], [5, 3, 6, 1, 8, 4, 7, 2, 9], [8, 2, 1, 7, 9, 6, 4, 5, 3], [7, 8, 5, 2, 1, 3, 4, 6, 9], [6, 4, 9, 5, 7, 8, 3, 2, 1], [3, 1, 2, 6, 4, 9, 5, 8, 7]]
  }
];

// 2. Random Selection Logic
function getRandomPuzzle() {
  const titleElement = document.querySelector('h1');
  const title = titleElement ? titleElement.innerText.toLowerCase() : "easy";
  
  let range;
  if (title.includes('medium')) {
    range = [3, 5]; // Indexes for Medium
  } else if (title.includes('hard') && !title.includes('super')) {
    range = [6, 8]; // Indexes for Hard
  } else if (title.includes('super')) {
    range = [9, 10]; // Indexes for Super Hard
  } else {
    range = [0, 2]; // Indexes for Easy (Default)
  }

  // Pick a random number between the start and end of the range
  const randomIndex = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  return puzzles[randomIndex];
}

// Global variables for current game
const selectedSet = getRandomPuzzle();
const puzzle = selectedSet.puzzle;
const solution = selectedSet.solution;
const container = document.getElementById('sudoku-container');

// 3. Create the Sudoku Grid
function createSudokuBoard() {
  if (!container) return;
  container.innerHTML = "";
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      
      if (puzzle[i][j] !== 0) {
        cell.innerText = puzzle[i][j];
        cell.contentEditable = false;
        cell.classList.add('fixed'); // Optional: for CSS styling
      } else {
        cell.contentEditable = true;
      }
      container.appendChild(cell);
    }
  }
}

// 4. Validate the solution
function checkSolution() {
  const cells = document.querySelectorAll('.cell');
  let currentMatch = 0;

  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const val = parseInt(cell.innerText);

    if (!isNaN(val) && val === solution[row][col]) {
      cell.classList.remove('incorrect');
      cell.classList.add('correct');
      currentMatch++;
    } else {
      cell.classList.remove('correct');
      cell.classList.add('incorrect');
    }
  });
  
  if (currentMatch === 81) {
    alert("Congratulations! You solved it perfectly!");
  } else {
    alert(`Keep going! You have ${currentMatch} correct cells out of 81.`);
  }
}

// 5. Show full solution
function showSolution() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    cell.innerText = solution[row][col];
    cell.classList.remove('incorrect');
    cell.classList.add('correct');
    cell.contentEditable = false;
  });
}

// Initialize on load
createSudokuBoard();