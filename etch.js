const container = document.querySelector(".container");
const gridDimensions = document.querySelector(".gridDimensions");
let rowContainer;
let column = 16;
let row = 16;

function createGrid(row,column) {
    for(let i = 0; i <row; i++) {
        rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        container.appendChild(rowContainer);
        for(let i = 0; i <column; i++) {
            const cells = document.createElement("div");
            cells.setAttribute("class", "cells");
            rowContainer.appendChild(cells);
        }
    }
}

function deleteGrid() {
    container.innerHTML = "";
}

gridDimensions.addEventListener('click', (e) => {
    column = prompt("Input column size");
    row = prompt("Input row size");
    deleteGrid();
    createGrid(row,column);
})

createGrid(row,column);

