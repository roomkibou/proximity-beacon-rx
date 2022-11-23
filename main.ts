radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    serial.writeValue("x", signal)
    serial.writeValue("map", Math.map(signal, -128, -42, 0, 9))
    led.plotBarGraph(
    Math.map(signal, -128, -42, 0, 5),
    5
    )
})
let signal = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
