function createCar(acceleration, maxSpeed) {
  (this.acceleration = acceleration), (this.maxSpeed = maxSpeed);
}

createCar.prototype.getSpeed = function (time) {
  const speed = this.acceleration * time;
  return speed > this.maxSpeed ? this.maxSpeed : speed;
};

const car = new createCar(5, 250);
console.log(car.getSpeed(6));
