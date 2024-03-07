let myLang = "Java"
console.log(myLang);

//here value of myLang is copied and then given to anotherLang
let anotherLang = myLang
console.log(anotherLang);

//here we are changing anotherLang's value, but it won't effect OG myLang
anotherLang = "JavaScript"
console.log(anotherLang);
//no Change
console.log(myLang);

//Non-Primitive

let userOne = {
    name: "Hrithik",
    phone: 9876543210,
}
console.log(userOne);
let userTwo = userOne
console.log(userTwo);

//once I change value of phone, it is updated in both userOne and userTwo
userTwo.phone = 1234567890;
console.log(userTwo);
console.log(userOne);