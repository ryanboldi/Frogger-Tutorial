class Road{
    static laneSpeed = 1;

    constructor(){
        //the lanes that are a part of this road
        this.lanes = [];
        

        //how many lanes we begin with
        let beginLanes = floor(HEIGHT / Lane.laneHeight) + 1;

        this.lanes.push(new Lane(300));
        for (let i = 0; i < beginLanes; i ++){
            this.addLane();
        }
    }

    //runs once per frame, checks various things that the road needds to keep track of
    check(){
        if (this.lanes[0].y > HEIGHT + Lane.laneHeight){
            this.deleteLane();
            this.addLane();
        }
    }

    //draws the current road state to the screen
    display(){
        for ( let i = 0; i < this.lanes.length; i ++){
            this.lanes[i].display();
        };
    }

    increment(){
        for ( let i = 0; i < this.lanes.length; i ++){
            this.lanes[i].y += Road.laneSpeed;
        };
    }

    //adds a lane on top of the last lane in the road object
    addLane(){
        if (this.lanes.length < 1){
            this.lanes.push(new Lane(0));
        } else {
            //y value of the last lane
            let lastY = this.lanes[this.lanes.length - 1].y;

            this.lanes.push(new Lane(lastY - Lane.laneHeight));
        }
    }

    //deletes the "first" lane in the list
    deleteLane(){
        this.lanes.shift();
    }
}