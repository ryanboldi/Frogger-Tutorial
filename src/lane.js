class Lane {
    static laneHeight = 100;
    static carSpeed = 1;

    //0.4 + this value is the maximum fill of a lane
    static carSpawnProbOffset = 0.40;

    /**
     * 
     * @param {Number} y the y-position of the top left of the lane
     */
    constructor(y, dir = -2){
        this.y = y;
        if (dir == -2){
            //generate a random direction
            if (random() < 0.5){
                this.dir = -1;
            } else {
                this.dir = 1;
            }
        } //-1 for left, 1 for right
//
        this.populate();
    }

    //draws the lane at the given y position
    display(){
        push();
        fill(120, 120, 120);
        stroke(0,0,0);
        strokeWeight(1);

        rect(0, this.y, WIDTH, Lane.laneHeight);
        pop();

        for(let i = 0; i < this.cars.length; i++){
            this.cars[i].display(this.y);
        }
    }


    //checks that all cars are on screen, if not, handles spawning
    check(){
        if (this.dir == 1){
            if (this.cars[0].x - (Car.carLength/2) > WIDTH){
                this.cars.push(new Car(this.cars[0].x - WIDTH - Car.carLength - Car.carGap));
                this.deleteCar();
            }
        } else {
            if (this.cars[0].x + (Car.carLength/2) < 0){
                this.cars.push(new Car(this.cars[0].x + WIDTH + Car.carLength + Car.carGap));
                this.deleteCar();
            }
        }
    }

    //move all the cars in the correct direction for the lane
    increment(){
        for(let i = 0; i < this.cars.length; i++){
            this.cars[i].x += Lane.carSpeed * this.dir;
        }
    }

    addCar(){
        if (this.cars.length < 1){
            this.cars.push(new Car(0 - Car.carLength));
        } else {
            //x value of the last car
            let lastX = this.cars[this.cars.length - 1].x + this.addGap;

            //based on direction, add car to left or right of the last one.
            if (this.dir == -1){
                this.cars.push(new Car(lastX + Car.carLength + Car.carGap));
            } else {
                this.cars.push(new Car(lastX - Car.carLength - Car.carGap));
            }
        }
    }

    //will fill this lane up with a random amount of cars
    populate(){
        //empty array
        this.cars = [];

        //number of cars on lane to start with MAXIMUM
        this.beginCars = WIDTH / (Car.carLength + Car.carGap); 

        //actual number of cars in lane
        this.accCars = floor(this.beginCars * ((random() * 0.4) + Lane.carSpawnProbOffset));

        //space between laast placed car and this
        this.addGap = 0;

        //pick n random places to spawn cars
        let picks = [];

        while (picks.length < this.accCars){
            //gives us a random spot in the lane
            let ran = floor(random() * this.beginCars);
            
            //check that ran is not in picks
            if (picks.includes(ran)){
                break;
            } else {
                picks.push(ran);
            }
        }

        picks.sort();
        
        //iterate through all picked indices
        for (let i = 0; i < picks.length; i++){
            //spawn the car at that position
            //what is that position?
            if (this.dir == -1){
                //left
                this.cars.push(new Car(picks[i] * (Car.carLength + Car.carGap)));
            } else {
                //right
                this.cars.push(new Car(800 - (picks[i] * (Car.carLength + Car.carGap))));
            }
        }
    }

    deleteCar(){
        this.cars.shift();
    }
}