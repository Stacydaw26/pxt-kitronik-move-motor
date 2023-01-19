radio.onReceivedValue(function (name, value) {
    if (name == "Forward") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, value)
    } else if (name == "Reverse") {
    	
    } else {
    	
    }
})
basic.showString("R")
radio.setGroup(1)
basic.forever(function () {
	
})
