//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

//SETUP
var game = new Phaser.Game(winWidth, winHeight , Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
    game.load.image('led', '/sprites/ledsprite.png');   
    game.load.image('battery', '/sprites/batterysprite.png');
    game.load.image('resistor', '/sprites/resistorsprite.png');
}

function create() {
    //Makes the background scalable
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Changes background
    game.stage.backgroundColor = '#87FF65';
    //Enables Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
}

function update() {
}


//Constructor Functions
function Resistor() {
    this.resistor = game.add.sprite(0, 0, 'resistor');
    this.resistance = 10;
    this.voltage = 15;
    this.current = 20;
    this.description = "resistors are dope";
    resistor.inputEnabled = true;
    resistor.input.enableDrag();
    resistor.events.onInputDown.add(displayValues, this);
}   

function Led() {
    this.led = game.add.sprite(400, 0, 'led');
    this.resistance = 30;
    this.voltage = 30;
    this.current = 10;
    this.description = "LEDs are dope ";
    led.inputEnabled = true;
    led.input.enableDrag(); 
    led.events.onInputDown.add(displayValues, this);
}

function Battery() {
    this.battery = game.add.sprite(700, 0, 'battery');
    this.resistance = 12;
    this.voltage = 40;
    this.current = 70;   
    battery.inputEnabled = true;
    battery.input.enableDrag();
    battery.events.onInputDown.add(displayValues, this);
}

function Conductor() {
    this.conductor = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 25;
    this.voltage = 12;
    this.current = 13;
    conductor.inputEnabled = true;
    conductor.input.enableDrag();
    conductor.events.onInputDown.add(displayValues, this);
}

function displayValues() {
    document.getElementById("resistance").innerHTML = resistance;
    document.getElementById("voltage").innerHTML = voltage;
    document.getElementById("current").innerHTML = current;
}

//Event Functions
//function displayResistor() {
//    let resistor = game.add.sprite(0, 0, 'skeleton'); 
//    resistor.inputEnabled = true;
//    resistor.input.enableDrag();
//}

//  function displayLed(){
//    let instance = new Led();
//    instance.led;
//    instance.led.inputEnabled = true;
//    instance.led.input.enableDrag(); 
//}

//function displayBattery(){
//    let instance = new Battery();
//    instance.battery;
//    instance.battery.inputEnabled = true;
//    instance.battery.input.enableDrag(); 
//}

//function displayConductor(){
//    let instance = new Conductor();
//    instance.conductor;
//    instance.conductor.inputEnabled = true;
//    instance.conductor.input.enableDrag(); 
//}