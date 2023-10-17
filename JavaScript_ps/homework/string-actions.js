// const text = "This is an example";
const text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let wordCounter = 0;
let letterCounter = 0;


for (let i =0;i<=text.length-1; i++) {
    if (text[i]==" ") {
        wordCounter+=1;
    } else if (text[i].toLowerCase()==="a") {
        letterCounter+=1;

    }
}

console.log("Number of words: "+wordCounter);
console.log("Number of letter a: "+letterCounter);


let longestWords = "";
let maxWordLength = 0;
let spaceIndex = 0;
let currentWord ="";
let longestWordsCount = 0;
let workingText = text.replaceAll(",", "").replaceAll(".", "")

do {
    spaceIndex=workingText.indexOf(" ");
    if (spaceIndex!=-1) {
        currentWord = workingText.slice(0, spaceIndex);
        workingText=workingText.slice(spaceIndex+1);
    } else {
        currentWord = workingText;
    }

    if (currentWord.length>maxWordLength) {
        maxWordLength=currentWord.length;
        longestWords=currentWord;
        longestWordsCount=1;
    } else if (currentWord.length==maxWordLength) {
        longestWords+=" "+currentWord;
        longestWordsCount++;
    }
} while (spaceIndex!=-1)

console.log(`Longest words: ${longestWords}`);
console.log(`Number of longest(${maxWordLength}) words: ${longestWordsCount}`);

