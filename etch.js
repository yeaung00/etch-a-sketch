const container = document.querySelector(".container");
const gridDimensions = document.querySelector(".gridDimensions");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const colorPickerBtn = document.querySelector(".colorPicker");
const markerBtn = document.querySelector(".marker");
const rainbowBtn = document.querySelector(".rainbow");
let showGridSize = document.querySelector(".showGridSize");
let cells;
let rowContainer;
let column = 16;
let row = 16;
let currentColor = "black";
let prevColor = currentColor;
let isDrawing = false;
let red;
let green;
let blue;
let isColorful = false;
let isErasing = false;
markerBtn.classList.add('selected');

function createGrid(row,column) {
    for(let i = 0; i <row; i++) {
        rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        container.appendChild(rowContainer);
        for(let i = 0; i <column; i++) {
            cells = document.createElement("div");
            cells.setAttribute("class", "cells");
            cells.addEventListener("mousedown", isDown);
            cells.addEventListener("mouseover", paint);
            rowContainer.appendChild(cells);
        }
    }
    showGridSize.textContent = row + " x " + column;
}
function isDown(e) {
    isDrawing = true;
    if (isColorful) {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        currentColor = "rgb("+ red +","+ green +","+ blue +")";
    }
    if (isErasing) {
        currentColor = 'white';
    }
    e.target.style.backgroundColor = currentColor;
    e.target.style.opacity = 1;
}
function deleteGrid() {
    container.innerHTML = "";
}
markerBtn.addEventListener('click', marker);
eraserBtn.addEventListener('click', erase);
clearBtn.addEventListener('click', clear);
rainbowBtn.addEventListener('click',rainbow);
colorPickerBtn.oninput = (e) => currentColor = e.target.value;

function rainbow() {
    if (!isColorful) { prevColor = currentColor; }
    
    isErasing = false;
    isColorful = true;
    markerBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    rainbowBtn.classList.add('selected');
}

function marker() {
    isColorful = false;
    isErasing = false;
    markerBtn.classList.add('selected');
    eraserBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
    currentColor = prevColor;
}
function clear() {
    deleteGrid();
    createGrid(row, column);
}
function erase(e) {
    if (!isErasing) { prevColor = currentColor; }
    
    isColorful = false;
    isErasing = true;
    markerBtn.classList.remove('selected');
    eraserBtn.classList.add('selected');
    rainbowBtn.classList.remove('selected');
    
}
container.onmousedown = () => isDrawing = true;
document.body.onmouseup = () => isDrawing = false;
function paint(e) {

    if (!isDrawing) return;
    if (isColorful) {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        currentColor = "rgb("+ red +","+ green +","+ blue +")";
    } else if (isErasing) {
        currentColor = 'white';
    }
    
    e.target.style.backgroundColor = currentColor;
    e.target.style.opacity = 1;

}

gridDimensions.addEventListener('click', (e) => {
    column = prompt("Input column size");
    row = prompt("Input row size");
    deleteGrid();
    createGrid(row,column);
})

createGrid(row,column);

