//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

//SETUP
var game = new Phaser.Game(winWidth, winHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    //Sprites for elements
    game.load.image('led', '/sprites/led.png');
    game.load.image('battery', '/sprites/battery.png');
    game.load.image('resistor', '/sprites/resistor.png');
    game.load.image('wireRight', '/sprites/wireRight.png');
    game.load.image('wireLeft', '/sprites/wireLeft.png');
    
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
}

function update() {
}

//Constructor functions
function Battery() {
    this.batteryResistance = 12;
    this.batteryVoltage = 40;
    this.batteryCurrent = 70;
    this.batteryDescription = "batteries are dope";
    this.battery = game.add.sprite(500, 500, 'battery');
    this.battery.inputEnabled = true;
    this.battery.events.onInputDown.add(batteryValues, this);
}

function Resistor() {
    this.resistorResistance = 40;
    this.resistorVoltage = 40;
    this.resistorCurrent = 70;
    this.resistorDescription = "resistors are dope";
    this.resistor = game.add.sprite(700, 300, 'resistor');
    this.resistor.inputEnabled = true;
    this.resistor.events.onInputDown.add(resistorValues, this);
}

function Led() {
    this.ledResistance = 40;
    this.ledVoltage = 40;
    this.ledCurrent = 90;
    this.ledDescription = "leds are dope";
    this.led = game.add.sprite(700, 400, 'led');
    this.led.inputEnabled = true;
    this.led.events.onInputDown.add(ledValues, this);
}

function batteryValues() {
    document.getElementById("resistance").innerHTML = this.batteryResistance;
    document.getElementById("voltage").innerHTML = this.batteryVoltage;
    document.getElementById("current").innerHTML = this.batteryCurrent;
    document.getElementById("description").innerHTML = this.batteryDescription;
}

function resistorValues() {
    document.getElementById("resistance").innerHTML = this.resistorResistance;
    document.getElementById("voltage").innerHTML = this.resistorVoltage;
    document.getElementById("current").innerHTML = this.resistorCurrent;
    document.getElementById("description").innerHTML = this.resistorDescription;
}


function ledValues() {
    document.getElementById("resistance").innerHTML = this.ledResistance;
    document.getElementById("voltage").innerHTML = this.ledVoltage;
    document.getElementById("current").innerHTML = this.ledCurrent;
    document.getElementById("description").innerHTML = this.ledDescription;
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


