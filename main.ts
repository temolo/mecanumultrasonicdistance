basic.showIcon(IconNames.Surprised)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Distance", mecanumRobot.ultra())
    basic.pause(200)
})
