

# Sudoku Game

>A modern, interactive Sudoku game built with HTML, CSS, and JavaScript.

## 🎮 How to Play

1. **Open the Game**
	- Download or clone this repository.
	- Open `index.html` in your browser (no installation required).

2. **Choose a Difficulty**
	- On the main screen, select a difficulty: **Easy**, **Medium**, or **Hard**.
	- The game board and controls will slide in with a smooth animation.

3. **Start a New Game**
	- Click the **New Game** button to generate a new random puzzle for the selected difficulty.

4. **Fill in the Board**
	- Click any empty cell to select it.
	- Use the on-screen number pad (1-9) to fill in your answer.
	- Fixed (given) numbers cannot be changed.

5. **Instant Feedback**
	- If you enter a wrong number, the cell will immediately highlight in red.
	- Correct entries remain neutral.

6. **Check Your Solution**
	- Click **Check Solution** to see your score (number of correct cells).
	- The timer will stop when you check your solution.

7. **Show Solution**
	- Click **Show Solution** to reveal the full answer.

8. **Timer & Score**
	- Your elapsed time and score are displayed on the right.
	- The timer starts when you begin a new game and stops when you check your solution.

## ✨ Features

- Dynamic Sudoku puzzle generation with unique solution (using backtracking algorithm)
- Three difficulty levels: Easy (40-45 clues), Medium (32-36), Hard (24-28)
- Animated UI with smooth transitions
- On-screen number pad for easy input
- Real-time error highlighting for incorrect entries
- Score and timer display
- Responsive, modern design
- No dependencies, works in any modern browser

## 📁 File Structure

- `index.html` — Main web page and UI
- `style.css` — All styles and animations
- `sudoku.js` — Game logic, puzzle generation, and interactivity

## 📝 Tips for New Players

- Use the **New Game** button to start over or try a new puzzle at any time.
- You can switch difficulty at any time, but only **New Game** will generate a new puzzle for the selected level.
- The timer only runs during active play and pauses when you check your solution.
- If you get stuck, use **Show Solution** to reveal the answer.

## 📧 Contact

For questions or feedback, please contact: jf5456@nyu.edu
