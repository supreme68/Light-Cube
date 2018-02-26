

// function setup(){
//     createCanvas(windowWidth , windowHeight);
 
// }   

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
   
// }
  


// function draw(){
    
// beginShape(LINES)                                                                      
// vertex(600 , 400);
// vertex(700 ,400);
// endShape();

// beginShape(LINES)
// vertex(600, 150);
// vertex(600 , 350);
// endShape();
// }

// function Resistor(){    


// }

// function HorizontalWire(){
//     beginShape(LINES)                                          
//     vertex(200, 120);   
//     vertex(85, 120);
//     endShape();
        
// }

var game = new Phaser.Game(800, 600 , Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.add.sprite(70, 40, 'star');
}

function create() {
}

function update() {
}
