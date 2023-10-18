const creditCardNumber = "17893729974";
let loopCount=0;
let luhnSum=0;
const americanStartNumbers=['34', '37'];
const masterStartNumbers = ['51', '52', '53', '54' ,'55'];
const visaStartNumber = '4';

for (let i = creditCardNumber.length-2; i>=0; i--) {
    loopCount++;
    let number = loopCount%2!=0 ? creditCardNumber[i]*2 : creditCardNumber[i];
    for (const digit of number.toString()) {
        luhnSum+=Number(digit)
    }
}
const isValid = 10-(luhnSum%10)==creditCardNumber.slice(-1)

if (!isValid) {
    console.log("INVALID")
} else {

    if (americanStartNumbers.includes(creditCardNumber.slice(0,2)) && creditCardNumber.length==15) {
        console.log("Given credit card is American Express")
    } else if (masterStartNumbers.includes(creditCardNumber.slice(0,2)) && creditCardNumber.length===16) {
        console.log("Given credit card is Master Card")
    } else if (creditCardNumber[0]==visaStartNumber && creditCardNumber.length===13 || creditCardNumber.length===16) {
        console.log("Given credit card is Visa Card")

    } else {
        console.log("INVALID")
    }
}