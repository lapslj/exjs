class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){return "Beep."}
    toString(){return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`}

}

class Car extends Vehicle{
    numwheels = 4
}

class Motorcycle extends Vehicle{
    numwheels = 2
    revEngine(){return "Vroom!!!"}
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
    }
    vehicles = []
    add(car){
        if(this.vehicles.length === this.capacity){
            return "Sorry we are full."
        }else{
            if(!(car instanceof Vehicle)){
                return "Sorry, only vehicles allowed in here!"
            }
            else{this.vehicles.push(car)}
        }
    }

}