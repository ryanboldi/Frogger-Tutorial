const WIDTH = 800;
const HEIGHT = 800;

let road;

function setup(){
    road = new Road();
    createCanvas(WIDTH, HEIGHT);
}

function draw(){
    background(160, 160, 250);
    road.display();
}