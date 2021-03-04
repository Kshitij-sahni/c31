const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine,myWorld;
var particle = [];
var plinko1 = [];
var division1 = [];
var ground;

function setup(){
    createCanvas(480,700);

    ellipseMode(RADIUS);
    rectMode(CENTER);
    
    myEngine = Engine.create();
    myWorld = myEngine.world;

   // particle = new Particles(240,10,6);

    for (var i = 15; i<480; i = i + 40){
        for(var j = 50; j< 350; j = j +55){
            plinko1.push(new plinko(i,j,6));
        }
    }

    for(var j = 0; j< 480; j = j +80){
        division1.push(new Divisions(j,600,10,200));
    }

    ground = new Divisions(240,697,480,5);

}

function draw(){
    background(0);

    Engine.update(myEngine);

    if(frameCount%45 === 0){
       particle.push(new Particle(random(100,300),10,8));
    }

    for (var i = 0; i<particle.length; i = i + 1){
        particle[i].display();
}      

    //particle.display();

    for (var i = 0; i<plinko1.length; i = i + 1){
            plinko1[i].display();
    }

    for (var i = 0; i<division1.length; i = i + 1){
        division1[i].display();
    }

    ground.display();
    
}