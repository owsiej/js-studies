// const palindrome = "race car"; // true
// const palindrome = "A man, a plan, a canal. Panama"; // true
// const palindrome = "never odd or even"; // true
const palindrome = "nope"; // false

let prePalindrome=palindrome.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").toLowerCase();

let reversed="";

for (let i=prePalindrome.length-1;i>=0;i--) {
    reversed+=prePalindrome[i];
}

console.log(reversed===prePalindrome);