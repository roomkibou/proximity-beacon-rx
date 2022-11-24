radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    serial.writeValue("x", signal)
    serial.writeValue("map", Math.map(signal, -128, -42, 0, 9))
    led.plotBarGraph(
    Math.map(signal, -128, -42, 0, 9),
    9
    )
    if (true) {
        radio.setTransmitSerialNumber(true)
        if (-128 != signal) {
        	
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(5)
    }
})
let signal = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
