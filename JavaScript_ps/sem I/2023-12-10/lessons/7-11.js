const { Car } = require("./3-6");
const { orderFromFactory } = require("./fake-api.js");

class CarDealer {
  #listOfCars;
  #transactionHistory;
  constructor(name) {
    this.name = name;
    this.#listOfCars = [];
    this.#transactionHistory = [];
  }
  get availableCars() {
    return this.#listOfCars;
  }

  addCar(car) {
    if (!Car.isCar(car)) {
      throw new Error("Object isn't a car.");
    }
    this.#listOfCars.push(car);
  }

  removeCar(id) {
    this.#listOfCars = this.#listOfCars.filter((car) => car.id !== id);
  }
  get totalPrice() {
    return this.#listOfCars.reduce((acc, car) => acc + car.price, 0);
  }

  get availableCars() {
    return this.#listOfCars;
  }

  makeCarRefund(obj) {
    if (!Car.isCar(obj)) {
      throw new Error("object is not a car");
    }
    obj.changeStatus("REFUND");
    this.#listOfCars.push(obj);
  }

  async orderFromFactory(amount) {
    try {
      const newCars = await orderFromFactory(amount);
      newCars.forEach((car) => this.addCar(car));
    } catch (e) {
      console.log(e);
    } finally {
      return this.#listOfCars;
    }
  }

  sellCar(id) {
    const carToSell = this.#listOfCars.find((car) => car.id === id);
    if (!carToSell) {
      throw new Error("Car doesnt exist.");
    }
    this.removeCar(id);
    this.#transactionHistory.push(carToSell);
  }
}
