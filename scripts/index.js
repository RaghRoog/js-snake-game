import makeGrid from "./playAreaGrid.js"
import player from "./player.js"

(function(){
    makeGrid(15)
    player()
    window.addEventListener('resize', () => {
        makeGrid(15)
    })
})()