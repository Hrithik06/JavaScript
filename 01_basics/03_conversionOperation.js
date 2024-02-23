const score = "96";
// console.log(typeof score);

const valueInNumber = Number(score)
// console.log(valueInNumber, typeof valueInNumber);

const score1 = "213abc"
const valueInNumber1 = Number(score1)
// console.log(valueInNumber1, typeof valueInNumber1);



/**
 * Operations
 */


console.log("1"+2); console.log( 1+"2") //= 12
console.log("1"+2+2) //= 122
console.log(1+2+"2") //= 32
console.log(1+"2"+2) //= 122
console.log(+true) //= 1 //boolean is converted to number
console.log(+"") //= 0 //empty string is false

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);