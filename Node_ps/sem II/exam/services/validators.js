const validatorConfig = {
  title: {
    validator: textValidator,
    maxLength: 20,
    areSpecialAllowed: false,
  },
  description: {
    validator: textValidator,
    maxLength: 100,
    areSpecialAllowed: true,
  },
  author: {
    validator: textValidator,
    maxLength: 20,
    areSpecialAllowed: false,
  },
  category: {
    validator: textValidator,
    maxLength: 20,
    areSpecialAllowed: false,
  },
  tags: {
    validator: tagsValidator,
    maxLength: 20,
    areSpecialAllowed: false,
  },
  price: {
    validator: numberValidator,
  },
  paidPeriodInWeeks: {
    validator: numberValidator,
  },
};

function validateObjectPropertyValues(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    const config = validatorConfig[key];
    if (!config) {
      throw new Error(`Invalid property name: ${property}`);
    }
    const validator = config["validator"];
    validator(key, value, config);
  });
}

function hasAllRequiredProperties(obj) {
  const requiredProperties = Object.keys(validatorConfig).sort();
  const givenProperties = Object.keys(obj).sort();
  if (requiredProperties.length !== givenProperties.length) {
    throw new Error(
      `Invalid amount of given properties. Only supported properties: ${requiredProperties}`
    );
  }
  if (requiredProperties.toString() !== givenProperties.toString()) {
    throw new Error(
      `You need to supply all required properties, like: ${requiredProperties}`
    );
  }
}

function textValidator(paramName, val, config) {
  isPresent(paramName, val);
  if (!config.areSpecialAllowed) {
    areSpecialSymbols(paramName, val);
  }
  maxLengthValidator(paramName, val, config.maxLength);
  return val;
}

function numberValidator(paramName, val) {
  if (!Number(val) | !Number.parseFloat(val)) {
    throw new Error(`Value of ${paramName} is not a number.`);
  }
  return val;
}

function tagsValidator(paramName, val, config) {
  isPresent(paramName, val);
  val
    .split(",")
    .forEach((el) =>
      textValidator(paramName, el, config.maxLength, config.areSpecialAllowed)
    );
  return val;
}

function isPresent(paramName, val) {
  if (!Boolean(val.trim())) {
    throw new Error(`Param ${paramName} can not be empty.`);
  }
  return true;
}
function areSpecialSymbols(paramName, val) {
  const specialSymbolsPattern = /^[A-Za-z]+[\w\s-]*[A-Za-z]+$/;
  if (val.search(specialSymbolsPattern) === -1) {
    throw new Error(
      `Value of ${paramName} can't have any special symbols besides '_' and '-' and only in the middle on the ${paramName}.`
    );
  }
  return false;
}

function maxLengthValidator(paramName, val, max) {
  if (val.length > max) {
    throw new Error(`${paramName} length must be max ${max} characters.`);
  }
}

module.exports = {
  validateObjectPropertyValues,
  hasAllRequiredProperties,
};
