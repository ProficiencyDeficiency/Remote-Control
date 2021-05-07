gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    radio.sendNumber(5)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendNumber(1)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendNumber(3)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendNumber(2)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    radio.sendNumber(4)
})
radio.setGroup(17)
