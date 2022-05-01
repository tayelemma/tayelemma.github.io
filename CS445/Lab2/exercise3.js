var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    //This is also the same as the above constructor. 
    // constructor(public name:string, public acceleration:number=0){
    // }
    Car.prototype.honk = function () {
        console.log(" ".concat(this.name, " is saying: Toooooooooot!"));
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
