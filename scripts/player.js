
export default function player(){
    let playArea = document.getElementById('play-area')
    let gridsCount = playArea.childElementCount
    let grids = playArea.children
    let randomGrid = Math.floor(Math.random() * gridsCount)
    grids[randomGrid].classList.remove('grid-cell')
    grids[randomGrid].classList.add('snake-head')
    
    console.log("grids: " + gridsCount)
    console.log("random num: " + randomGrid)
}
