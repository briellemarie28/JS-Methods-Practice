class Car {
    constructor(fuelLevel = 100) {
        this.speed = 0;
        this.engineOn = false;
        this.fuelLevel = fuelLevel;
    }
    accelerate() {
        if(this.fuelLevel >=1) {
            this.fuelLevel --;
            this.speed++;
        }
    }
    brake() {
        if(this.speed >=0) {
            this.speed --;
        }
    }
    turnCarOn() {
        this.engineOn = true;
    }
    turnCarOff() {
        this.engineOn - false;
    }
    refillFuel() {
        this.fuelLevel = 100;
    }
}
 let myCar = new Car(60) 
     myCar.refillFuel();
     myCar.turnCarOn();
     myCar.accelerate(); 
     myCar.accelerate(); 
     myCar.accelerate(); 
     myCar.brake();
     myCar.brake();
     myCar.brake();
     myCar.turnCarOff();
     console.log(myCar);
