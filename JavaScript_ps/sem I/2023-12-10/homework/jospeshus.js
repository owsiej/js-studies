/*
●	Solve Josephus's Problem for 7 soldiers using JavaScript. (You can try to solve it with classes)
●	Display in the console:
○	1 Kills 2
○	3 Kills 4
○	5 Kills 6
○	7 Kills 1
○	3 Kills 5
○	7 Kills 3
○	7 Remains alive

*/

class JosephusProblem {
  constructor(numberOfSoldiers, step) {
    this.step = step;
    this.numberOfSoldiers = Array.from(
      { length: numberOfSoldiers },
      (val, idx) => idx + 1
    );
  }

  #fight() {
    let currentIndex = 0;
    while (this.numberOfSoldiers.length != 1) {
      const shootingSoldier =
        this.numberOfSoldiers[currentIndex % this.numberOfSoldiers.length];
      currentIndex = (currentIndex + this.step) % this.numberOfSoldiers.length;
      const killedSoldier = this.numberOfSoldiers[currentIndex];
      console.log(`${shootingSoldier} Kills ${killedSoldier}`);
      this.numberOfSoldiers.splice(currentIndex, 1);
    }
  }

  findSurvivor() {
    this.#fight();
    console.log(`${this.numberOfSoldiers[0]} Remains alive`);
  }
}

const problem = new JosephusProblem(7, 1);

problem.findSurvivor();
