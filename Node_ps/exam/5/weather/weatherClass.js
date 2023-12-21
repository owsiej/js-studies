class Weather {
  constructor(main, description, location) {
    this.main = main;
    this.description = description;
    this.location = location;
  }

  toString() {
    let weatherStringRep = `Weather in ${this.location}:\n`;
    Object.entries(this.main).forEach((stat) => {
      weatherStringRep += ` * ${stat[0]} - ${stat[1]}\n`;
    });
    return weatherStringRep + `Weather description: ${this.description}.`;
  }
}
module.exports = Weather;
