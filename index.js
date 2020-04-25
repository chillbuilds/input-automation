var robot = require("robotjs")

var screenSize = robot.getScreenSize()

robot.setMouseDelay(2)

robot.moveMouse(screenSize.width/2, screenSize.height/2)