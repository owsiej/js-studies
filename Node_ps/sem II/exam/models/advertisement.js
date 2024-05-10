const moment = require("moment");

class Advertisement {
  constructor(
    title,
    description,
    author,
    category,
    tags,
    price,
    paidPeriodInWeeks
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.category = category;
    this.tags = tags.split(",");
    this.price = price;
    this.paidPeriodInWeeks = paidPeriodInWeeks;
    this.additionTime = moment().format("LLL");
    this.lastModified = this.additionTime;
    this.validTill = moment()
      .add(this.paidPeriodInWeeks, "weeks")
      .format("LLL");
  }
}

module.exports = Advertisement;
