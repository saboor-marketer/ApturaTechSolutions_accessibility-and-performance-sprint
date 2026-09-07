// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Apply theme on page load
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    themeToggle.setAttribute('aria-label', 'Toggle light mode');
}

// Toggle theme
function toggleTheme() {
    const isDark = document.body.getAttribute('data-bs-theme') === 'dark';
    if (isDark) {
        document.body.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeToggle.setAttribute('aria-label', 'Toggle light mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Add event listener for theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) { // Only auto-update if no manual preference is set
        document.body.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
        themeIcon.className = e.matches ? 'fas fa-sun' : 'fas fa-moon';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Game state
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    let scores = { X: 0, O: 0, draws: 0 };
    
    // DOM Elements
    const cells = document.querySelectorAll('.cell');
    const statusMessage = document.getElementById('status-message');
    const scoreDisplay = document.getElementById('score-display');
    const restartBtn = document.getElementById('restart-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    const resultMessage = document.getElementById('result-message');
    
    // Winning combinations (indices)
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    // Initialize the game
    function initGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        updateStatusMessage();
        updateScoreDisplay();
        
        // Clear the board UI
        cells.forEach((cell, index) => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winner');
            cell.style.pointerEvents = 'auto';
            cell.setAttribute('aria-label', `Cell ${index + 1}, empty`);
            cell.disabled = false;
        });
    }
    
    // Handle cell click/keyboard activation
    function handleCellClick(e) {
        const cell = e.target;
        const cellIndex = parseInt(cell.getAttribute('data-index'));
        
        // If cell is already filled or game is not active, do nothing
        if (board[cellIndex] !== '' || !gameActive) return;
        
        // Update the board
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());
        cell.setAttribute('aria-label', `Cell ${cellIndex + 1}, occupied by ${currentPlayer}`);
        
        // Check for win or draw
        if (checkWin()) {
            handleWin();
        } else if (checkDraw()) {
            handleDraw();
        } else {
            // Switch player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateStatusMessage();
        }
    }
    
    // Check for a win
    function checkWin() {
        return winConditions.some(combination => {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }
    
    // Check for a draw
    function checkDraw() {
        return board.every(cell => cell !== '');
    }
    
    // Handle win
    function handleWin() {
        gameActive = false;
        scores[currentPlayer]++;
        updateScoreDisplay();
        
        // Highlight winning cells and disable all cells
        const [a, b, c] = winConditions.find(combination => {
            const [x, y, z] = combination;
            return board[x] && board[x] === board[y] && board[x] === board[z];
        });
        
        const winningCells = [
            document.querySelector(`[data-index="${a}"]`),
            document.querySelector(`[data-index="${b}"]`),
            document.querySelector(`[data-index="${c}"]`)
        ];
        
        winningCells.forEach(cell => {
            cell.classList.add('winner');
            cell.setAttribute('aria-label', cell.getAttribute('aria-label') + ', winning cell');
        });
        
        // Disable all cells
        cells.forEach(cell => {
            cell.disabled = true;
        });
        
        // Show game over modal
        resultMessage.textContent = `Player ${currentPlayer} wins! 🎉`;
        gameOverModal.show();
        
        // Focus on play again button for keyboard users
        setTimeout(() => playAgainBtn.focus(), 100);
    }
    
    // Handle draw
    function handleDraw() {
        gameActive = false;
        scores.draws++;
        updateScoreDisplay();
        
        // Disable all cells
        cells.forEach(cell => {
            cell.disabled = true;
        });
        
        // Show game over modal
        resultMessage.textContent = "It's a draw!";
        gameOverModal.show();
        
        // Focus on play again button for keyboard users
        setTimeout(() => playAgainBtn.focus(), 100);
    }
    
    // Update status message
    function updateStatusMessage() {
        statusMessage.textContent = `Player ${currentPlayer}'s Turn`;
    }
    
    // Update score display
    function updateScoreDisplay() {
        scoreDisplay.textContent = `X: ${scores.X} | O: ${scores.O} | Draws: ${scores.draws}`;
    }
    
    // Event Listeners
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
    
    restartBtn.addEventListener('click', () => {
        initGame();
    });
    
    playAgainBtn.addEventListener('click', () => {
        gameOverModal.hide();
        initGame();
    });
    
    // Initialize the game
    initGame();
});
