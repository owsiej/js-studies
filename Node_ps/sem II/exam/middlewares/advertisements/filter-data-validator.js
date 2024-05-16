const {
  validateObjectPropertyValues,
} = require("../../services/validators-engine.js");
const validatorFilterConfig = require("../../config/filter-validator-config.js");
const mapFilter = require("../../config/database-query-config.js");

const filterDataValidator = (req, res, next) => {
  if (Object.keys(req.query).length === 0) {
    next();
  } else {
    try {
      const validatedQuery = validateObjectPropertyValues(
        req.query,
        validatorFilterConfig
      );
      const filterQuery = Object.entries(validatedQuery).reduce(
        (acc, [key, value]) => {
          acc.push(mapFilter(key, value));
          return acc;
        },
        []
      );
      res.locals.filterQuery = filterQuery;
      next();
    } catch (error) {
      console.log(error);
      res.status(400);
      res.send(error.message);
    }
  }
};

module.exports = filterDataValidator;
