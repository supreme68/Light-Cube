
//Gets the value of the window width
let winWidth = window.innerWidth;
//Gets the value of the window height
let winHeight = window.innerHeight;

var game = new Phaser.Game(winWidth, winHeight , Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
    game.load.image ('skeleton' , '/sprites/skeleton.png');
}


function create() {
    //Changes background
    game.stage.backgroundColor = '#87FF65';
    //Enables Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
 
}

function update() {


 
}

function Resistor() {
    let sprite = game.add.sprite(0, 0, 'skeleton');
    sprite.inputEnabled = true;
    sprite.input.enableDrag();
    sprite.events.onDragStart.add(startDrag, this);
    sprite.events.onDragStop.add(stopDrag, this);
}

function Led() {
    let sprite = game.add.sprite(0, 0, 'skeleton');
    sprite.inputEnabled = true;
    sprite.input.enableDrag();
    sprite.events.onDragStart.add(startDrag, this);
    sprite.events.onDragStop.add(stopDrag, this);
}

function Battery() {
    let sprite = game.add.sprite(0, 0, 'skeleton');
    sprite.inputEnabled = true;
    sprite.input.enableDrag();
    sprite.events.onDragStart.add(startDrag, this);
    sprite.events.onDragStop.add(stopDrag, this);
}

function Conductor() {
    let sprite = game.add.sprite(0, 0, 'skeleton');
    sprite.inputEnabled = true;
    sprite.input.enableDrag();
    sprite.events.onDragStart.add(startDrag, this);
    sprite.events.onDragStop.add(stopDrag, this);
}