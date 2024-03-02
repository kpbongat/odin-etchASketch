const NUM_OF_ROWS = 16;
const NUM_OF_COLUMNS = 16;
const grid = document.querySelector('.grid');

for (let x = 0; x<NUM_OF_ROWS; x++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.toggle('row');
    for (let y = 0; y<NUM_OF_COLUMNS; y++){
        const columnDiv = document.createElement('div');
        columnDiv.classList.toggle('column');
        columnDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.toggle('hover')
        });
        columnDiv.addEventListener('mouseleave',(e)=>{
            e.target.classList.toggle('hover')
        });
        rowDiv.addEventListener('mouseenter',(e)=>{
            e.target.classList.toggle('hover')
        });
        rowDiv.addEventListener('mouseleave',(e)=>{
            e.target.classList.toggle('hover')
        });
        rowDiv.appendChild(columnDiv);
    }
    grid.appendChild(rowDiv);

}

