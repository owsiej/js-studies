let sentence =
  "Hello, this is my long sentence, please break it up on the display.";
let DISPLAY_SIZE = 12;

while (sentence.length>DISPLAY_SIZE) {
    let lastIndex = sentence.lastIndexOf(" ", DISPLAY_SIZE);

    let sentencePiece = sentence.slice(0, lastIndex);
    console.log(sentencePiece);
    sentence=sentence.slice(lastIndex+1);
}
console.log(sentence);