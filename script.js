//your JS code here. If required.
// Get all squares
const squares = document.querySelectorAll(".square");

// Colors
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

// Loop through each square
squares.forEach((sq, index) => {
  // On hover (mouseenter)
  sq.addEventListener("mouseenter", () => {
    squares.forEach((other, i) => {
      if (i !== index) {
        other.style.backgroundColor = coffee; // change other squares to coffee
      }
    });
  });

  // On leaving (mouseleave) - reset all back to lavender
  sq.addEventListener("mouseleave", () => {
    squares.forEach((other) => {
      other.style.backgroundColor = lavender;
    });
  });
});
