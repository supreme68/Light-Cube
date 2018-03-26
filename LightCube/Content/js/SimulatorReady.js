//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

//SETUP
var game = new Phaser.Game(winWidth, winHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    //Sprites for elements
    game.load.image('led', '/Content/sprites/led.png');
    game.load.image('battery', '/Content/sprites/battery.png');
    game.load.image('resistor', '/Content/sprites/resistor.png');
    game.load.image('wire', '/Content/sprites/wire.png');
    game.load.image('wireVertical', '/Content/sprites/wireVertical.png');
    //game.load.image('wireRight', '/sprites/wireRight.png');
    //game.load.image('wireLeft', '/sprites/wireLeft.png');

}

function create() {
    //Makes the background scalable
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Changes background
    game.stage.backgroundColor = '#87FF65';
    //Enables Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Constructor function invocation
    Battery();
    Resistor();
    Led();
    Wire();
}

function update() {
}

//Constructor functions
function Battery() {
    //this.batteryVoltage = 9;
    this.battery = game.add.sprite(700, 500, 'battery');
    this.battery.inputEnabled = true;
    this.battery.events.onInputDown.add(batteryValues, this);
}

function Resistor() {
    //this.resistorResistance = 48;
    this.resistor = game.add.sprite(722, 300, 'resistor');
    this.resistor.inputEnabled = true;
    this.resistor.events.onInputDown.add(resistorValues, this);
}

function Led() {
    //this.ledVoltage = 0;
    //this.ledCurrent = 25;
    this.led = game.add.sprite(870, 230, 'led');
    this.led.inputEnabled = true;
    this.led.events.onInputDown.add(ledValues, this);
}

function Wire() {
    //this.wireVoltage = 0;
    this.wire = game.add.sprite(230, 325, 'wire');
    this.wire0 = game.add.sprite(410, 325, 'wire');
    this.wire1 = game.add.sprite(755, 500, 'wireVertical');
    //this.wire.inputEnabled = true;
    //this.wire.events.onInputDown.add(wireValues, this);
}

function batteryValues() {
    this.batteryVoltage = 9;
    document.getElementById("voltage").innerHTML = "Voltage:" + this.batteryVoltage + "V";
    document.getElementById("current").innerHTML = "";
    document.getElementById("resistance").innerHTML = "";
}

function resistorValues() {
    this.resistorResistance = 48;
    document.getElementById("resistance").innerHTML = "Resistance" + this.resistorResistance + "Ohms";
    document.getElementById("current").innerHTML = "";
    document.getElementById("voltage").innerHTML = "";
}

function ledValues() {
    this.ledVoltage = 0;
    this.ledCurrent = 25;
    this.x = document.getElementById("voltage").innerHTML = "Voltage:" + this.ledVoltage + "V";
    this.y = document.getElementById("current").innerHTML = "Current" + this.ledCurrent + "mA";
    document.getElementById("resistance").innerHTML = "";
}

//function wireValues() {
//    document.getElementById("voltage").innerHTML = "Voltage:" + this.wireVoltage + "V";
//}


function On() {
    this.battery = game.add.sprite(700, 500, 'battery');
    this.battery.inputEnabled = true;
    this.battery.events.onInputDown.add(batteryValues1, this);

    this.resistor = game.add.sprite(700, 315, 'resistor');
    this.resistor.inputEnabled = true;
    this.resistor.events.onInputDown.add(resistorValues1, this);

    this.led = game.add.sprite(870, 225, 'led');
    this.led.inputEnabled = true;
    this.led.events.onInputDown.add(ledValues1, this);
}

function Off() {
    this.battery = game.add.sprite(700, 500, 'battery');
    this.battery.inputEnabled = true;
    this.battery.events.onInputDown.add(batteryValues, this);

    this.resistor = game.add.sprite(700, 315, 'resistor');
    this.resistor.inputEnabled = true;
    this.resistor.events.onInputDown.add(resistorValues, this);

    this.led = game.add.sprite(870, 225, 'led');
    this.led.inputEnabled = true;
    this.led.events.onInputDown.add(ledValues, this);
}



function batteryValues1() {
    this.batteryVoltage = 9;
    document.getElementById("voltage").innerHTML = "Voltage:" + this.batteryVoltage + "V";
    document.getElementById("current").innerHTML = "";
    document.getElementById("resistance").innerHTML = "";
}

function resistorValues1() {
    this.resistorResistance = 48;
    document.getElementById("resistance").innerHTML = "Resistance" + this.resistorResistance + "Ohms";
    document.getElementById("current").innerHTML = "";
    document.getElementById("voltage").innerHTML = "";
}

function ledValues1() {
    this.ledVoltage = 1.2;
    this.ledCurrent = 25;
    this.x = document.getElementById("voltage").innerHTML = "Voltage:" + this.ledVoltage + "V";
    this.y = document.getElementById("current").innerHTML = "Current" + this.ledCurrent + "mA";
    document.getElementById("resistance").innerHTML = "";
}

//function Wire() {
//    this.resistorResistance = 40;
//    this.resistorVoltage = 40;
//    this.resistorCurrent = 70;
//    this.resistorDescription = "resistors are dope";
//    this.resistor = game.add.sprite(700, 300, 'resistor');
//    this.resistor.inputEnabled = true;
//    this.resistor.events.onInputDown.add(resistorValues, this);
//}