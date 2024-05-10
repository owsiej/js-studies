const { hasAllRequiredProperties } = require("../services/validators.js");

const advertisementPropertiesValidator = (req, res, next) => {
  const body = req.body;
  try {
    hasAllRequiredProperties(body);

    next();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
};

module.exports = advertisementPropertiesValidator;
