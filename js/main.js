'use strict'
var currSize = 100

function onBallClick() {
    var elBall = document.querySelector('div')
    currSize += getRandomInt(20, 60)

    elBall.style.height = currSize + 'px'
    elBall.style.width = currSize + 'px'
    elBall.innerText = currSize

    if (currSize >= 400) {
        currSize = 100
    }
}