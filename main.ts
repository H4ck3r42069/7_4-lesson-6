let ship_x = 2
let asteroid_x = randint(0, 4)
let asteroid_y = 0
let playing = 1
while (playing == 1) {
    if (input.rotation(Rotation.Roll) > 10 && ship_x < 4) {
        ship_x += 1
    } else if (input.rotation(Rotation.Roll) < -10 && ship_x > 0) {
        ship_x += -1
    }
    asteroid_y += 1
    if (asteroid_y > 4) {
        asteroid_y = 0
        asteroid_x = randint(0, 4)
    } else if (asteroid_x == ship_x && asteroid_y == 4) {
        playing = 0
    }
    basic.clearScreen()
    led.plot(ship_x, 4)
    led.plot(asteroid_x, asteroid_y)
    basic.pause(200)
}
