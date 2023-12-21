function isValidFilename(filename) {
  if (!filename.trim()) {
    return false;
  }

  const invalidChars = /[\/?%*:|"<>]/;
  if (invalidChars.test(filename)) {
    return false;
  }

  if (filename.length > 255) {
    return false;
  }

  if (filename.endsWith(".") || filename.endsWith(" ")) {
    return false;
  }

  return true;
}

module.exports = isValidFilename;
