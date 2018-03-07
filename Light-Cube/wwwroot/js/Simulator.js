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

    //Sprites for Buttons
    //game.load.image('ledButton', '/sprites/ledBtn.png');
    //game.load.image('resistorButton', '/sprites/resistorBtn.png');
    //game.load.image('batteryButton', '/sprites/batteryBtn.png');
    //game.load.image('wireButton', '/sprites/wireBtn.png');
}

function create() {
    //Makes the background scalable
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Changes background
    game.stage.backgroundColor = '#87FF65';
    //Enables Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //resistorButton = game.add.button(game.world.centerX - 95, 400, 'resistorButton', Resistor, this, 2, 1, 0);
    //ledButton = game.add.button(game.world.centerX - 95, 300, 'ledButton', Led, this, 2, 1, 0);
    //batteryButton = game.add.button(game.world.centerX - 95, 200, 'batteryButton', Battery, this, 2, 1, 0);
    //wireButton = game.add.button(game.world.centerX - 95, 100, 'wireButton', Wire, this, 2, 1, 0);

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
    this.resistor.inputEnabled = true;
    this.resistor.input.enableDrag();
    this.resistor.events.onInputDown.add(displayValues, this);
}   

function Led() {
    this.led = game.add.sprite(400, 0, 'led');
    this.resistance = 30;
    this.voltage = 30;
    this.current = 10;
    this.description = "LEDs are dope ";
    this.led.inputEnabled = true;
    this.led.input.enableDrag(); 
    this.led.events.onInputDown.add(displayValues, this);
}

function Battery() {
    this.battery = game.add.sprite(700, 0, 'battery');
    this.resistance = 12;
    this.voltage = 40;
    this.current = 70;
    this.description = "Batterys are dope"
    this.battery.inputEnabled = true;
    this.battery.input.enableDrag();
    this.battery.events.onInputDown.add(displayValues, this);
}

function Wire() {
    this.wireLeft = game.add.sprite(800, 100, 'wireLeft');
    wireLeft.anchor.set(0.5);
    wireLeft.inputEnabled = true;
    wireLeft.input.enableDrag(true);

    this.wireRight = game.add.sprite(900, 400, 'wireRight');
    wireRight.anchor.set(0.5);
    wireRight.inputEnabled = true;
    wireRight.input.enableDrag(true);

    this.line = new Phaser.Line(this.wireLeft.x, this.wireLeft.y, this.wireRight.x, this.wireRight.y);
    this.line.fromSprite(this.wireLeft, this.wireRight, false);
   
    this.resistance = 25;
    this.voltage = 12;
    this.current = 13;
    this.description = "Wires are dope ";
   
    //wire.events.onInputDown.add(displayValues, this);
}

function displayValues() {
    document.getElementById("resistance").innerHTML = this.resistance;
    document.getElementById("voltage").innerHTML = this.voltage;
    document.getElementById("current").innerHTML = this.current;
    document.getElementById("description").innerHTML = this.description;
}

function hideCustom() {
    document.getElementById("navigation").style.display = 'none';
}

function showCustom() {
    document.getElementById("navigation").style.display = ' grid';
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
