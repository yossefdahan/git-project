'use strict'
var currHeight = 100
var currWidth = 100

function onBallClick() {
    var elBall = document.querySelector('div')

    currHeight += 50
    currWidth += 50

    elBall.style.height = currHeight + 'px'
    elBall.style.width = currWidth + 'px'
    elBall.innerText = currHeight
    if (currHeight >= 400) {
        currHeight = 100
        currWidth = 100
    }
}