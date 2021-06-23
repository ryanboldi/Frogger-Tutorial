class Road{
    constructor(){
        this.lanes = [];
        this.lanes.push(new Lane(0));
    }

    //draws the current road state to the screen
    display(){
        push();
        fill(120,120,120);
        stroke(0, 0, 0);
        strokeWeight(1);
        rect(0,0,800, this.lanes.length * Lane.laneHeight);
        for ( let i = 0; i < this.lanes.length - 1; i ++){
            line(0, Lane.laneHeight * (i + 1), 800, Lane.laneHeight * (i + 1));
        };
        pop();
    }
}