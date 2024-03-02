const grid = document.querySelector('.grid');
const drawButton = document.querySelector('button')
drawButton.addEventListener('click', ()=>{
    let numRows = prompt('Enter number of squares per side to a maximum of 100.');
    if (numRows>100){
        numRows = 100;
    }
    let numBoxes = numRows;
    const gridChildren = document.querySelectorAll('.row')
    for (const i of gridChildren) {
        grid.removeChild(i)
    }
    drawGrid(numRows,numBoxes)
})
function drawGrid(numRows,numBoxes) {

for (let x = 0; x<numRows; x++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.toggle('row');
    for (let y = 0; y<numBoxes; y++){
        const boxDiv = document.createElement('div');
        boxDiv.classList.toggle('box');
        boxDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.add('hover')
        });
        boxDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.add('hover')
        });

        rowDiv.appendChild(boxDiv);
    }
    grid.appendChild(rowDiv);

}
}



