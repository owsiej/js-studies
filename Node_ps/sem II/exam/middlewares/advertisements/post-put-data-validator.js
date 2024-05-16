const {
  validateObjectPropertyValues,
} = require("../../services/validators-engine.js");
const validatorPostPutConfig = require("../../config/post-put-validator-config.js");

const advertisementPostPutValidator = (req, res, next) => {
  const body = req.body;

  try {
    const validatedBody = validateObjectPropertyValues(
      body,
      validatorPostPutConfig
    );
    req.body = validatedBody;
    next();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error.message);
  }
};

module.exports = advertisementPostPutValidator;
