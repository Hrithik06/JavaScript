const name = "hrithik";
const repoCnt = 100;

console.log(name + " has "+repoCnt+" repos ");

console.log(`Hello, my name is ${name.toUpperCase()}. I have ${repoCnt} repos on my GitHub`);

//Using String Object
const myName = new String('Hrithik')
console.log(myName);
console.log(myName[0]);
console.log(typeof myName);//object
console.log(myName.charAt(5));
console.log(myName.indexOf('t'));
console.log(myName.substring(0,4));
console.log(myName.substring(-7,4));
console.log(myName.slice(0,4));
console.log(myName.slice(-7,3));
console.log(myName.__proto__);
console.log("    hrithik     ".trim())//also trimStart, trimEnd there.
const url = "https://hrithik%20dev.com" //%20 is a space which browser converts.
console.log(url.replace('%20','-'));
console.log(url.includes('lol'));
//can use split to convert string to array