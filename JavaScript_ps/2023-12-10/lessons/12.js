import { Car } from "./3-6";

class ElectricCar extends Car {
  constructor(
    acceleration,
    maxSpeed,
    price,
    batteryCapacity,
    productionDate = "2023"
  ) {
    super(acceleration, maxSpeed, price, productionDate);
    this.batteryCapacity = batteryCapacity;
  }

  getRemainingBattery(seconds) {
    return (
      ((this.batteryCapacity - seconds * this.#calculateBatteryDrainage()) /
        this.batteryCapacity) *
      100
    );
  }

  #calculateBatteryDrainage() {
    return (this.acceleration * this.batteryCapacity) / 100000;
  }
}
