const accId = 12
let accEmail = "hrithik@email.com"
var accPasswrod = "123456"
accCity = "Pune"// also possible
let accState;
// accId = 45 //not allowed
accEmail = "hrithik@hrithik.com"
accPasswrod = "21123"
accCity = "Delhi"

/*
Prefer not to use var,
cuz of issue of block-scope
 */
console.table([accId, accEmail, accPasswrod, accCity, accState]);