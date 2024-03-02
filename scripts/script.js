const NUM_OF_ROWS = 16;
const NUM_OF_BOXES = 16;
const grid = document.querySelector('.grid');

for (let x = 0; x<NUM_OF_ROWS; x++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.toggle('row');
    for (let y = 0; y<NUM_OF_BOXES; y++){
        const boxDiv = document.createElement('div');
        boxDiv.classList.toggle('box');
        boxDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.add('hover')
        });
        rowDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.add('hover')
        });

        rowDiv.appendChild(boxDiv);
    }
    grid.appendChild(rowDiv);

}

