const grid = document.getElementById("grid");
makeRows(25);
let rows = document.getElementsByClassName("gridRow");
makeCells(25,25);
let clearButton = document.getElementById("clear");
const gridSquares = document.querySelectorAll(".gridCell");

clearButton.addEventListener('click',(e)=>{gridSquares.forEach((gridSquare) => {
    gridSquare.classList.remove("blue")
}

    )})


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