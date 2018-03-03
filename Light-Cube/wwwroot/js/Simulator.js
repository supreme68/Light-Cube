//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

//SETUP
var game = new Phaser.Game(winWidth, winHeight , Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
    game.load.image('skeleton', '/sprites/skeleton.png');
    
}

function create() {
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
    this.resistor = game.make.sprite(0, 0, 'skeleton');
    this.resistance = 10;
    this.voltage = 15;
    this.current = 20;
    this.description = "resistors are dope";
}   

function Led() {
    this.led = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 30;
    this.voltage = 30;
    this.current = 10;
    this.description = "LEDs are dope ";
}

function Battery() {
    this.battery = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 12;
    this.voltage = 40;
    this.current = 70;   
}

function Conductor() {
    this.conductor = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 25;
    this.voltage = 12;
    this.current = 13;
}

//Event Functions
function displayResistor() {
    let resistor = game.add.sprite(0, 0, 'skeleton'); 
    resistor.inputEnabled = true;
    resistor.input.enableDrag();
}

function test() {
    
    resistor.events.onInputDown.add(Show, this);
}

  function displayLed(){
    let instance = new Led();
    instance.led;
    instance.led.inputEnabled = true;
    instance.led.input.enableDrag(); 
}

function displayBattery(){
    let instance = new Battery();
    instance.battery;
    instance.battery.inputEnabled = true;
    instance.battery.input.enableDrag(); 
}

function displayConductor(){
    let instance = new Conductor();
    instance.conductor;
    instance.conductor.inputEnabled = true;
    instance.conductor.input.enableDrag(); 
}



function Show() {
    let x = new Resistor();
    document.getElementById("resistance").innerHTML = x.resistance;
    document.getElementById("voltage").innerHTML = x.voltage;
    document.getElementById("current").innerHTML = x.current;      
}       

//function test(){
//    let y = new Resistor();
//    y.resistor.inputEnabled = true;
   
//    y.resistor.input.enableDrag();
//}
