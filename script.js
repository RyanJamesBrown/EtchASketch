var gridSize = 25;
const grid = document.getElementById("grid");
makeRows(gridSize);
let rows = document.getElementsByClassName("gridRow");
makeCells(gridSize,gridSize);
let clearButton = document.getElementById("clear");
let newGridButton = document.getElementById("newGrid");
let gridSquares = document.querySelectorAll(".gridCell");

clearButton.addEventListener('click',(e)=>{gridSquares.forEach((gridSquare) => {
    gridSquare.classList.remove("blue")
    }
)})

newGridButton.addEventListener('click',(e)=>{
    let newSize = prompt("What is the new grid size?");
    grid.innerHTML = "";
    makeRows(newSize);
    rows = document.getElementsByClassName("gridRow");
    makeCells(newSize,newSize);
    gridSquares = document.querySelectorAll(".gridCell");
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover',(e) =>{
            gridSquare.classList.add("blue");
        })
    })
})


gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover',(e) =>{
        gridSquare.classList.add("blue");
    })
})

function makeRows(numRows){
    for(i=0;i<numRows;i++){
        let row = document.createElement('div');
        //row.innerText=(i+1);
        grid.appendChild(row).className = "gridRow";
    };
};

function makeCells(numRows,numCells){
    for(i=0;i<numRows;i++){
        for(j=0;j<numCells;j++){
            let cell = document.createElement('div');
           // cell.innerText +=j;
            rows[i].appendChild(cell).className = "gridCell";
        };
    }
}