var robot = require("robotjs")

var screenSize = robot.getScreenSize()

robot.setMouseDelay(2)

robot.moveMouse(screenSize.width/100*3.5, screenSize.height/100*98.5)
robot.mouseClick('left', false)
setTimeout(function(){
    robot.typeString('images.google.com')
    robot.keyTap('enter')
    setTimeout(() => {
    robot.typeString('sandwich')
    robot.keyTap('enter')
}, 2000);
}, 3000);
