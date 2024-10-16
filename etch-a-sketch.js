const GRIDSIDE = 600;  // Grid side length in pixels
let rows = 16;         // Number of rows
let cols = 16;         // Number of columns

// Select the sketch area container
const sketchArea = document.querySelector('#sketch-area');

// Set the width and height of the grid container
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

//Change background colour function
function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}


function createGrid() {
    // Create grid cells
    for (let i = 0; i < rows * cols; i++) {
        const gridCell = document.createElement("div");

        // Set the width and height for each cell, subtracting 2px for borders
        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;

        // Add the 'cell' class to each grid cell
        gridCell.classList.add("cell");

        // Append the cell to the sketch area
        sketchArea.appendChild(gridCell);

        //event listener for each cell
        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}


// Call the function to create the grid
createGrid();