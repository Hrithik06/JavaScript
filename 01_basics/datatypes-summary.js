/**
 * On the basis of how data type is stored in the memory and how data is accessed Data types are categorized in two types. Primitive and Non-Primitive(reference-type) data typeof.
  
 * Primitive - 7 types :: these are call by value that is when these are copied somewhere, there memory is not given but there value is copied and given to us, any changes we make are made to copy.
String, Number, Boolean, Null, Undefined, Symbol(mainly used for unique identification for eg: in react when reusing components), BigInt(Scientific value or very big values which can't be handled)

* Reference-Type(Non-Primitive) :: Arrays, Objects, Functions

Even if we send same value for Symbol it returns different data everytime which is uniqe
 * */

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id, anotherId);
console.log(id === anotherId);