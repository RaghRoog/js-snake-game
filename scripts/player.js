
export default function player(){
    let playArea = document.getElementById('play-area')
    let gridsCount = playArea.childElementCount
    let gridDimensions = Math.sqrt(gridsCount)
    let grids = playArea.children
    let randomGrid = Math.floor(Math.random() * gridsCount)
    grids[randomGrid].classList.remove('grid-cell')
    grids[randomGrid].classList.add('snake-head')
    let gridsArray = Array.from(grids)
    let dividedGrid = divideArray(gridsArray, gridDimensions)
    
    playerMove(dividedGrid, randomGrid, 100)
}

function divideArray(array, size){
    let newArray = []
    for(let i = 0; i < array.length; i += size){
        newArray.push(array.slice(i, i + size))
    }
    return newArray
}

function playerMove(divGrid, randGrid, timeInterval){
    let playerPos = getPlayerPos(randGrid, 15)
    let interval
    document.addEventListener('keydown', (e) => {
        switch(e.key){
            case 'ArrowLeft':
                clearInterval(interval)
                interval = setInterval(() => {
                    divGrid[playerPos.y][playerPos.x].classList.remove('snake-head')
                    divGrid[playerPos.y][playerPos.x].classList.add('grid-cell')
                    divGrid[playerPos.y][playerPos.x - 1].classList.remove('grid-cell')
                    divGrid[playerPos.y][playerPos.x - 1].classList.add('snake-head')
                    playerPos.x -= 1
                }, timeInterval)
                
                break
            case 'ArrowUp':
                clearInterval(interval)
                interval = setInterval(() => {
                    divGrid[playerPos.y][playerPos.x].classList.remove('snake-head')
                    divGrid[playerPos.y][playerPos.x].classList.add('grid-cell')
                    divGrid[playerPos.y - 1][playerPos.x].classList.remove('grid-cell')
                    divGrid[playerPos.y - 1][playerPos.x].classList.add('snake-head')
                    playerPos.y -= 1
                }, timeInterval)
                break
            case 'ArrowRight':
                clearInterval(interval)
                interval = setInterval(() => {
                    divGrid[playerPos.y][playerPos.x].classList.remove('snake-head')
                    divGrid[playerPos.y][playerPos.x].classList.add('grid-cell')
                    divGrid[playerPos.y][playerPos.x + 1].classList.remove('grid-cell')
                    divGrid[playerPos.y][playerPos.x + 1].classList.add('snake-head')
                    playerPos.x += 1
                }, timeInterval)
                break
            case 'ArrowDown':
                clearInterval(interval)
                interval = setInterval(() => {
                    divGrid[playerPos.y][playerPos.x].classList.remove('snake-head')
                    divGrid[playerPos.y][playerPos.x].classList.add('grid-cell')
                    divGrid[playerPos.y + 1][playerPos.x].classList.remove('grid-cell')
                    divGrid[playerPos.y + 1][playerPos.x].classList.add('snake-head')
                    playerPos.y += 1
                }, timeInterval)
                break
        }
    })
}

function getPlayerPos(currentGridCell, gridSize){
    let yPos = Math.floor(currentGridCell / gridSize)
    let xPos = currentGridCell % gridSize
    let playerPos = {
        x: xPos,
        y: yPos
    }
    return playerPos
}