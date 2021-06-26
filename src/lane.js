class Lane {
    static laneHeight = 100;

    /**
     * 
     * @param {Number} y the y-position of the top left of the lane
     */
    constructor(y){
        this.y = y;
    }

    //draws the lane at the given y position
    display(){
        push();
        fill(120, 120, 120);
        stroke(0,0,0);
        strokeWeight(1);

        rect(0, this.y, WIDTH, Lane.laneHeight);
        pop();
    }
}