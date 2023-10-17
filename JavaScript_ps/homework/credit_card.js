const creditCardNumber = "4758669358471";
let loopCount=0;
let sum=0;
for (let i = creditCardNumber.length-2; i>=0; i--) {
    loopCount++;
    let number = loopCount%2!=0 ? creditCardNumber[i]*2 : creditCardNumber[i];
    for (const digit of number.toString()) {
        sum+=Number(digit)
    }
}
const isValid = 10-(sum%10)==creditCardNumber.slice(-1) ? "Credit card number is valid" : "Credit card number is invalid";

console.log(isValid)

if (['34', '37'].includes(creditCardNumber.slice(0,2)) && creditCardNumber.length==15) {
    console.log("Given credit card is American Express")
} else if (['51', '52', '53', '54' ,'55'].includes(creditCardNumber.slice(0,2)) && creditCardNumber.length===16) {
    console.log("Given credit card is Master Card")
} else if (creditCardNumber.slice(0,1)==4 && creditCardNumber.length===13 || creditCardNumber.length===16) {
    console.log("Given credit card is Visa Card")

} else {
    console.log("INVALID")
}