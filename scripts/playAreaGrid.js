
function makeGrid(gridSize){
    let playArea = document.getElementById('play-area')
    playArea.innerHTML = ''
    for(let i = 0; i < gridSize * gridSize; i++){
        let gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        let gridCellDimensions = playArea.clientWidth/gridSize
        gridCell.style.height = `${gridCellDimensions}px`
        gridCell.style.width = `${gridCellDimensions}px`
        playArea.appendChild(gridCell)
    }
}

export default makeGrid