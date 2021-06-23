class Road{
    static laneHeight = 100;
    static lanes = 5;

    constructor(){
    }

    //draws the current road state to the screen
    display(){
        push();
        fill(120,120,120);
        stroke(0, 0, 0);
        strokeWeight(1);
        rect(0,0,800, Road.lanes * Road.laneHeight);
        for ( let i = 0; i < Road.lanes - 1; i ++){
            line(0, Road.laneHeight * (i + 1), 800, Road.laneHeight * (i + 1));
        };
        pop();
    }
}