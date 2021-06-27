class Lane {
    static laneHeight = 100;
    static carSpeed = 1;

    //0.5 + this value is the maximum fill of a lane
    static carSpawnProbOffset = 0.45;

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

        this.cars = [];
        //number of cars on lane to start with MAXIMUM
        this.beginCars = WIDTH / (Car.carLength + Car.carGap); 
        this.accCars = floor(this.beginCars * ((random()/2) + Lane.carSpawnProbOffset));

        this.addGap = 0;

        for (let i = 0; i < this.beginCars; i++){
            this.tryAddCar();
        }
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

    tryAddCar(){
        if (random() < this.accCars/this.beginCars){
            this.addCar();
        } else {
            this.addGap += Car.carLength + Car.carGap;
        }
    }

    deleteCar(){
        this.cars.shift();
    }
}