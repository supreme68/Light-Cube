
//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

var game = new Phaser.Game(winWidth, winHeight , Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
    game.load.image ('skeleton' , '/sprites/skeleton.png');
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


function Resistor() {
    this.resistor = game.add.sprite(0, 0, 'skeleton');
    this.resistance  = 10;
    this.voltage = 15;
    this.current = 20;
    this.description = "resistors are dope";
    resistor.inputEnabled = true;
    resistor.events.onInputDown.add(Show, this);
    resistor.input.enableDrag();
    resistor.events.onDragStart.add(startDrag, this);
    resistor.events.onDragStop.add(stopDrag, this);
}

function Led() {
    this.led = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 30;
    this.voltage = 30;
    this.current = 10;
    this.description = "LEDs are dope ";
    led.inputEnabled = true;
    led.events.onInputDown.add(Show, this);
    led.input.enableDrag();
    led.events.onDragStart.add(startDrag, this);
    led.events.onDragStop.add(stopDrag, this);
}

function Battery() {
    this.battery = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 12;
    this.voltage = 40;
    this.current = 70;
    battery.inputEnabled = true;
    battery.events.onInputDown.add(Show, this);
    battery.input.enableDrag();
    battery.events.onDragStart.add(startDrag, this);
    battery.events.onDragStop.add(stopDrag, this    );    
}

function Conductor() {
    this.conductor = game.add.sprite(0, 0, 'skeleton');
    this.resistance = 25;
    this.voltage = 12;
    this.current = 13;
    conductor.inputEnabled = true;
    conductor.input.enableDrag();
    conductor.events.onInputDown.add(Show, this);
    conductor.events.onDragStart.add(startDrag, this);
    conductor.events.onDragStop.add(stopDrag, this);
}


function Show(){
    document.getElementById("resistance").innerHTML = this.resistance;
    document.getElementById("voltage").innerHTML = this.voltage;
    document.getElementById("current").innerHTML = this.    current;       
}