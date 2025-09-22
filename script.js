// Select all squares
const squares = document.querySelectorAll('.square');

// Loop through each square to add event listeners
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        squares.forEach(sq => {
            if (sq !== square) {
                sq.style.backgroundColor = '#6F4E37'; // Coffee
            } else {
                sq.style.backgroundColor = '#E6E6FA'; // Lavender
            }
        });
    });

    // Reset all squares to Lavender when mouse leaves a square
    square.addEventListener('mouseleave', () => {
        squares.forEach(sq => {
            sq.style.backgroundColor = '#E6E6FA'; // Lavender
        });
    });
});
