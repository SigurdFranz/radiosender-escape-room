radio.onReceivedString(function (receivedString) {
    basic.showNumber(5)
})
radio.setGroup(1)
radio.setTransmitPower(2)
basic.showString("Hei")
basic.forever(function () {
    radio.sendString("Hei")
    basic.pause(200)
})
