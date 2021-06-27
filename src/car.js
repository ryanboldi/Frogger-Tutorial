class Car{
    static carLength = 100;
    static carGap = 10;
    static carHeight = 100 * 0.8;
    

    constructor(x){
        this.x = x;
    }

    display(parentY){
        push();
        rectMode(CENTER);
        fill(255,0,0);
        stroke(0,0,0);
        strokeWeight(1);

        rect(this.x, parentY + Lane.laneHeight/2, Car.carLength,  Car.carHeight);
        pop();
    }
}