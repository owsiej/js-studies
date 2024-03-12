/*
4.	Write a function that translates a text to Pig Latin and back. 
English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word, and adding ‘ay’. 
“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
*/

const sample = "The quick brown fox";
let pigLatin = "";
for (let word of sample.split(/\s+/)) {
  pigLatin += word.slice(1) + word[0].toLowerCase() + "ay ";
}
console.log(pigLatin.trim());
