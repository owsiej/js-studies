const car = {
  acceleration: 5,
  maxSpeed: 250,
  getSpeed(time) {
    const speed = this.acceleration * time;
    return speed > this.maxSpeed ? this.maxSpeed : speed;
  },
};

console.log(car.getSpeed(5));
console.log(car);
