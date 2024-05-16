function validateObjectPropertyValues(obj, mainConfig) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const config = mainConfig[key];
    if (!config) {
      throw new Error(
        `Invalid property name: ${key}. Supported params: ${Object.keys(
          mainConfig
        )}`
      );
    }
    const validator = config["validator"];
    const newVal = validator(key, value, config);
    return {
      ...acc,
      [key]: newVal,
    };
  }, {});
}

function hasAllRequiredProperties(obj, mainConfig) {
  const requiredProperties = Object.keys(mainConfig).sort();
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

module.exports = {
  validateObjectPropertyValues,
  hasAllRequiredProperties,
};
