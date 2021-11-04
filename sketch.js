const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,hierro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    //rubber = new Rubber(x,y,radio);
    stone = new Stone(500,400,600,50);
    hierro = new Hierro(800,400,70,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    //rubber.display();
    stone.display();
    hierro.display();

    
 
}