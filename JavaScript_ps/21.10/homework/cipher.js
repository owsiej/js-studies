const messageToEncrypt = "encrypt me";
const messageToDecrypt = "tcrgnei bt";

function getAlphabet() {
  let alphabet = "";
  const start = "a".charCodeAt();
  const end = "z".charCodeAt();
  for (let i = start; i <= end; i++) {
    alphabet += String.fromCharCode(i);
  }
  return alphabet;
}

function encrypt(text, code, alphabet=getAlphabet()) {
  let codedAlphabet = "";
  let codedText = "";
  for (const letter of alphabet) {
    let codedAlphabetIndex =
      (alphabet.indexOf(letter) + code) % alphabet.length;
    codedAlphabet += alphabet[codedAlphabetIndex];
  }
  for (const char of text) {
    let codedTextIndex = alphabet.indexOf(char);
    codedTextIndex != -1
      ? (codedText += codedAlphabet[codedTextIndex])
      : (codedText += char);
  }
  return codedText;
}

function decrypt(text, code, alphabet=getAlphabet()) {
    // const alphabet = getAlphabet();
    // let decodedAlphabet = "";
    // let decodedText = "";
    // for (const letter of alphabet) {
    //   let decodedAlphabetIndex =
    //     (alphabet.indexOf(letter) - code + alphabet.length) % alphabet.length;
    //   decodedAlphabet+=alphabet[decodedAlphabetIndex];
    // }
    // for (const char of text) {
    //   let codedTextIndex = alphabet.indexOf(char);
    //   codedTextIndex != -1
    //     ? (decodedText += decodedAlphabet[codedTextIndex])
    //     : (decodedText += char);
    // }
  const newCode = -code + alphabet.length;
  const decodedText = encrypt(text, newCode, alphabet);
  return decodedText;
}

console.log(encrypt(messageToEncrypt, 15));
console.log(decrypt(messageToDecrypt, 15));
