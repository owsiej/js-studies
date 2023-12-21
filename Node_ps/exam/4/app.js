/*
[5 punktów] Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:
    pobierze z API informacje o danej liczbie (https://lukaszuk.net/numbers.php?number={number}, np https://lukaszuk.net/numbers.php?number=1)
    informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie

Przykład pliku: data.json

{
    "number": "588",
    "filename": "file.json"
}

Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.
*/
const readDataAndParseJSON = require("./read-data.js");
const saveDataToFile = require("./save-data.js");
const getNumberData = require("./request-data.js");
const isValidFilename = require("./filename-validator.js");

const FILE_PATH = "./data.json";
const { number, filename } = readDataAndParseJSON(FILE_PATH);

if (!(number && filename)) {
  throw new Error(
    "Invalid parameters. Check property names of read object or format of data."
  );
}
if (!isValidFilename(filename)) {
  throw new Error("Invalid filename.");
}

(async () => {
  let numberData = await getNumberData(number);
  try {
    numberData = JSON.stringify(numberData);
  } catch (error) {
    throw new Error(`Error during converting data to JSON", ${error.message}`);
  }
  await saveDataToFile(filename, numberData);
})();
