const NUM_OF_ROWS = 16;
const NUM_OF_COLUMNS = 16;
const grid = document.querySelector('.grid');

for (let x = 0; x<NUM_OF_ROWS; x++) {
    const rowDiv = document.createElement('div');
    for (let y = 0; y<NUM_OF_COLUMNS; y++){
        const columnDiv = document.createElement('div');
        rowDiv.appendChild(columnDiv);
    }
    grid.appendChild(rowDiv);

}

