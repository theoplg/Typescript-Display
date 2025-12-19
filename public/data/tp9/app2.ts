interface IVehicle {
  drive(): void;
  honk(): void;
}

abstract class Vehicle implements IVehicle {
  speed: number;
  abstract honk(): void;
  drive(): void {
    console.log(`Driving at ${this.speed} km/h`);
  }
  constructor(speed: number) {
    this.speed = speed;
  }
}

//let lambo: Vehicle = new Vehicle(200);
//console.log(lambo.drive());

class car extends Vehicle {
  honk(): void {
    console.log("BEEP BEEP BEEP");
  }
  drive(): void {
    console.log("Driving at" + this.speed + "km/h");
  }
  constructor(speed: number) {
    super(speed);
  }
}

class bicycle extends Vehicle {
  honk(): void {
    console.log("RING RING ");
  }
  drive(): void {
    console.log("Driving at" + this.speed + "km/h");
  }
  constructor(speed: number) {
    super(speed);
  }
}

let between: bicycle = new bicycle(15);
let BMX: bicycle = new bicycle(13);
let decathlon: bicycle = new bicycle(10);
let lambo: car = new car(200);
let peugeot: car = new car(150);

let tabVehicle: IVehicle[] = [];
tabVehicle.push(between);
tabVehicle.push(BMX);
tabVehicle.push(decathlon);
tabVehicle.push(lambo);
tabVehicle.push(peugeot);
console.log(tabVehicle);

for (let vehicles of tabVehicle) {
  vehicles.honk();
  vehicles.drive();
}
