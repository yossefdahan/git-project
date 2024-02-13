'use strict'


function onBallClick() {
    var currHeight = 100
    var currWidth = 100
    var newHeight = currHeight + 50 + 'px'
    var newWidth = currWidth + 50 + 'px'
    var elBall = document.querySelector('div')
    elBall.style.height = newHeight
    elBall.style.width = newWidth
    elBall.innerText = newHeight + ',' + newWidth
}