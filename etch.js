const container = document.querySelector(".container");

function createGrid() {
    for(let i = 0; i <16; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        container.appendChild(rowContainer);
        for(let i = 0; i <16; i++) {
            const column = document.createElement("div");
            column.setAttribute("class", "column");
            rowContainer.appendChild(column);
        }
    }
}
createGrid();

