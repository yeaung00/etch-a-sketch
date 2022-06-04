const container = document.querySelector(".container");
const gridDimensions = document.querySelector(".gridDimensions");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const colorPickerBtn = document.querySelector(".colorPicker");
const markerBtn = document.querySelector(".marker");
let cells;
let rowContainer;
let column = 16;
let row = 16;
let currentColor = "black";
let prevColor = currentColor;
let isDrawing = false;


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
}

function isDown(e) {
    isDrawing = true;
    e.target.style.backgroundColor = currentColor;
}
function deleteGrid() {
    container.innerHTML = "";
}
markerBtn.addEventListener('click', marker);
eraserBtn.addEventListener('click', erase);
clearBtn.addEventListener('click', clear);
colorPickerBtn.oninput = (e) => currentColor = e.target.value;

function marker() {
    markerBtn.classList.add('selected');
    eraserBtn.classList.remove('selected');
    clearBtn.classList.remove('selected');
    gridDimensions.classList.remove('selected');
    currentColor = prevColor;
}
function clear() {
    markerBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    clearBtn.classList.add('selected');
    gridDimensions.classList.remove('selected');
    deleteGrid();
    createGrid(row, column);
}
function erase(e) {
    markerBtn.classList.remove('selected');
    eraserBtn.classList.add('selected');
    clearBtn.classList.remove('selected');
    gridDimensions.classList.remove('selected');
    prevColor = currentColor;
    currentColor = "white";
}
container.onmousedown = () => isDrawing = true;
document.body.onmouseup = () => isDrawing = false;
function paint(e) {
        console.log(isDrawing);
        if (!isDrawing) return;
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

