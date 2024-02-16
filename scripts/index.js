import makeGrid from "./playAreaGrid.js"

(function(){
    makeGrid(15)
    window.addEventListener('resize', () => {
        makeGrid(15)
    })
})()