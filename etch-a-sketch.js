const GRIDSIDE = 600;  // Grid side length in pixels
let squaresPerSide = 16; //The area of the grid (x * x)

// Select the sketch area container
const sketchArea = document.querySelector('#sketch-area');
// Res slider
const sliderContainter = document.querySelector("#res-slider");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`; 
// Set the width and height of the grid container
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


//Change background colour function
function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}


function createGrid(squaresPerSide) {
    // Create grid cells
    const numberOfSquares = (squaresPerSide * squaresPerSide)
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;
    for (let i = 0; i < numberOfSquares; i++) {
        const gridCell = document.createElement("div");

        // Set the width and height for each cell, subtracting 2px for borders
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squaresPerSide) - 2}px`;
     
        // Add the 'cell' class to each grid cell
        gridCell.classList.add("cell");

        // Append the cell to the sketch area
        sketchArea.appendChild(gridCell);

        //event listener for each cell
        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

//Removes first child over and over until desired cell limit
function removeGrid (){
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


// Function to allow user to change cells
slider.oninput = function() {
    let text = `${this.value} X ${this.value} (Resolution)`
    sliderValue.innerHTML = text;
    removeGrid();
    createGrid(this.value);
}

// Call the function to create the grid
createGrid(squaresPerSide);