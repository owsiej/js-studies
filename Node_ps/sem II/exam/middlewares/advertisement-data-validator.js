const { validateObjectPropertyValues } = require("../services/validators.js");

const advertisementDataValidator = (req, res, next) => {
  const body = req.body;

  try {
    validateObjectPropertyValues(body);

    next();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
};

module.exports = advertisementDataValidator;
