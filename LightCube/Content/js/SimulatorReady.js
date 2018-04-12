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
    Led(0);
    Wire(0);
}

function update() {
}

//Constructor functions
function Battery() {
    this.voltage = 9;
    this.current = 0;
    this.resistance = 0;
    this.battery = (()=> {
        this.battery = game.add.sprite(700, 500, 'battery');
        this.battery.inputEnabled = true;
        this.battery.events.onInputDown.add(display_Resistor, this);
    })();
    //function DisplayValues() {
    //document.getElementById("voltage").innerHTML = "Voltage:" + this.voltage + "V";
    //document.getElementById("current").innerHTML = "Current:" + this.current + "mA";
    //}
}

function Resistor() {
    this.resistance= 48;
    this.resistor = (()=> {
        this.sprite = game.add.sprite(722, 300, 'resistor');
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputDown.add(displayValues, this);
    })();
    //function DisplayValues() {
    //    document.getElementById("resistance").innerHTML = "Resistance:" +resistance + "Ohms";
    //}
}

function Led(voltage) {
    this.voltage = voltage;
    this.current = 25;
    this.led = (() => {
        this.sprite = game.add.sprite(870, 230, 'led');
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputDown.add(DisplayValues, this);
    })();
    //function DisplayValues() {
    //document.getElementById("voltage").innerHTML = "Voltage:" + voltage + "V";
    //document.getElementById("current").innerHTML = "Current:" + current + "mA";
    //}
}

//This Should Have Changed values
function Wire(voltage) {
    this.voltage = voltage;
    this.wire = (() => {
        this.sprite 
            [
                game.add.sprite(230, 325, 'wire'),
                game.add.sprite(410, 325, 'wire'),
                game.add.sprite(755, 500, 'wireVertical')
            ];
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputDown.add(DisplayValues, this);
    })(); 
    function DisplayValues() {
        document.getElementById("voltage").innerHTML = "Voltage:" + voltage + "V";
    }
}

function On(){
    Led(1.2);
}

function Off() {
    Led(0);
    Wire(0);
}