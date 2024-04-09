// -	Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

// class LongestSubsequence {
//   constructor(text1, text2) {
//     this.text1 = text1;
//     this.text2 = text2;
//   }

//   findLongestSubsequence() {
//     const results = [];
//     for (let i = 0; i < this.text1.length; i++) {
//       let j = this.text2.indexOf(this.text1[i]);
//       while (j != "-1") {
//         if (this.text1.length - i === 1 || this.text2.length - j === 1) {
//           results.push(this.text1[i]);
//           break;
//         }
//         let firstIndex = i;
//         let secondIndex = j;
//         while (
//           this.text1[firstIndex] === this.text2[secondIndex] &&
//           this.text2[secondIndex] &&
//           this.text1[firstIndex]
//         ) {
//           firstIndex++;
//           secondIndex++;
//         }
//         results.push(this.text1.substring(i, firstIndex));
//         j = this.text2.indexOf(this.text1[i], j + 1);
//       }
//     }
//     return results.reduce((a, b) => (a.length > b.length ? a : b));
//   }
// }

// const subseq = new LongestSubsequence("karol", "rolkikarol");
// console.log(subseq.findLongestSubsequence());

class LongestSubsequence {
  constructor(text1, text2) {
    this.text1 = text1;
    this.text2 = text2;
  }

  findLongestSequence() {
    const [shorterWord, longerWord] = [this.text1, this.text2].sort(
      (a, b) => a.length - b.length
    );
    for (let i = 0; i < shorterWord.length; i++) {
      let startIndex = i;
      let endIndex = 0;
      for (let j = i; j >= 0; j--) {
        const wordSeq = shorterWord.substring(
          startIndex,
          shorterWord.length - endIndex
        );
        if (longerWord.includes(wordSeq)) {
          return wordSeq;
        }
        startIndex--;
        endIndex++;
      }
    }
  }
}

const subseq2 = new LongestSubsequence("karol", "rolki");
console.log(subseq2.findLongestSequence());
