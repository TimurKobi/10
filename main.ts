let A = 0
let B = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    A = randint(0, 2)
    ShowHand(A)
})
function judge (Hand1: number, Hand2: number) {
    if (Hand1 == Hand2) {
        return "Tie"
    } else if (Hand1 == 0 && Hand2 == 1) {
        return "Won 1"
    } else if (Hand1 == 1 && Hand2 == 2) {
        return "Won 1"
    } else if (Hand1 == 1 && Hand2 == 0) {
        return "Won 2"
    } else if (Hand1 == 2 && Hand2 == 0) {
        return "Won 1"
    } else if (Hand1 == 2 && Hand2 == 1) {
        return "Won 2"
    } else {
        return "Won 2"
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (judge(A, B)))
})
input.onButtonPressed(Button.B, function () {
    B = randint(0, 2)
    ShowHand(B)
})
function ShowHand (Hand: number) {
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    radio.sendNumber(Hand)
}
basic.forever(function () {
	
})
