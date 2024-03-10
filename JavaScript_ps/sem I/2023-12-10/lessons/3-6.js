const CAR_STATUS = {
  NEW: "NEW",
  USED: "USED",
  REFUND: "REFUND",
};

export class Car {
  wheels = 4;
  id = Date.now();
  status = CAR_STATUS.NEW;

  constructor(acceleration, maxSpeed, price, productionDate = "2023") {
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.productionDate = productionDate;
  }

  getSpeed(time) {
    const speed = this.acceleration * time;
    return speed > this.maxSpeed ? this.maxSpeed : speed;
  }
  changePrice(newPrice) {
    if (typeof newPrice !== "number") {
      throw new Error("given price is not a number.");
    }
    this.price = newPrice;
  }

  changeStatus(newStatus) {
    if (!Object.values(CAR_STATUS).includes(newStatus)) {
      throw new Error("Wrong status");
    }
    this.status = newStatus;
  }

  static isAfterReturn(obj) {
    if (!Car.isCar(obj)) {
      throw new Error("Object is not a car object.");
    }
    return obj.status === CAR_STATUS.REFUND;
  }

  static isCar(obj) {
    return obj instanceof Car;
  }
}

const car = new Car(5, 250);
console.log(car);


