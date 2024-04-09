// -	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

// class LongestPalindrome {
//   constructor(text) {
//     this.text = text;
//   }

//   #isPalindrome(sample) {
//     return sample === sample.split("").reverse().join("");
//   }

//   findLongestPalindrome() {
//     const results = [];
//     for (let i = 0; i < this.text.length; i++) {
//       for (let j = this.text.length - 1; j > i; j--) {
//         if (this.text[i] === this.text[j]) {
//           const palindromeCandidate = this.text.substring(i, j + 1);
//           if (this.#isPalindrome(palindromeCandidate)) {
//             results.push(palindromeCandidate);
//           }
//         }
//       }
//     }
//     return results.reduce((a, b) => (a.length > b.length ? a : b));
//   }
// }
// const pali = new LongestPalindrome("baerren");
// console.log(pali.findLongestPalindrome());

class LongestPalindrome {
  constructor(text) {
    this.text = text;
  }

  #isPalindrome(sample) {
    return sample === sample.split("").reverse().join("");
  }

  findLongestPalindrome() {
    const results = [];
    for (let i = 0; i < this.text.length; i++) {
      let j = this.text.indexOf(this.text[i], i + 1);
      while (j != "-1") {
        const palindromeCandidate = this.text.substring(i, j + 1);
        if (this.#isPalindrome(palindromeCandidate)) {
          results.push(palindromeCandidate);
        }
        j = this.text.indexOf(this.text[i], j + 1);
      }
    }

    return results.reduce((a, b) => (a.length > b.length ? a : b));
  }
}
const pali = new LongestPalindrome("karakis");
console.log(pali.findLongestPalindrome());
