const WIDTH = 800;
const HEIGHT = 800;

let road;

// runs once at the begining
function setup(){
    road = new Road();
    createCanvas(WIDTH, HEIGHT);
}

//runs once per frame
function draw(){
    background(160, 160, 250);
    road.check();
    road.display();
    road.increment();
}