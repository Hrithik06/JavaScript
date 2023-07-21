This is my notes on Javascript going through [FreeCodeCamp JS course](https://www.youtube.com/watch?v=PkZNo7MFNFg)
## Comments
Comments are lines which is not executed as it ignored by the compiler.
To comment a single // is used followed by the sentence.
To comment multiple lines /* */ is used.
```javascript
// This a single line comment
/*This is a
mult-line
comment*/
```
## Data types in JavaScript
JS supports 7 different data types.
* undefined: anything which hasn't been defined yet, may be a variable that isn't set to be anything yet.
* null: null means nothing.
* boolean: bollean means true or false.
* string: a string is just any text.
* symbol: symbol is an immutable primitive unique value.
* number: a number is a number duh!
* object: an object can store a lot of different key value pairs

## Variable
A variable is used to set data. A variable allows computers to store and manipulate data in dynamic fashion. A variable is like box and you can fill it with anything. You can set a variable to anything, any of the data types. There are three ways to declare a variable.
* var: To declare a variable use "var" keyword followed by the variable name. You can use variables declared by "var" throughout the whole program.
```javascript
var myName = "Jesus"
myName = 10
```
* let: To declare a variable use "let" keyword followed by the variable name. Variables declared using "let" can only be used within the scope where they are declared.
```javascript
let myLastName = "Christ"
```
* const: const variable can't be changed once declared.
```javascript
const pi = 3.14
```
## Storing values & Assignment operator(=)

Declaring variables
```javascript
var a;
```
Declaring and Assigning variables
"=" operator is used to assign a value to variable. In below example it means, 2 is being assigned to b. We're not checking whether b is equal to 2.
```javascript
var b = 2;
```
As "a" is already declared we can assign value to "a".
```javascript
a = 5;
```
Assigning contents of "a" to "b".
```javascript
b = a;
```

## How to see things in console?
console.log() allows us to see things in console. console.log(a) will show 7.
```javascript
console.log(a)
```

## Uninitialized and initialized variables
Variables which don't have any value assigned to them while declaring are _unintialized variables_.
```javascript
var a;
var b;
var c;
```
Variables which have value assigned to them while declaring are _intialized variables_.
```javascript
var a = 10;
var b = 25;
var c = "I'm Madame";
a = a + 1;
b = b + 5;
c = c + " Web!";
```

## Case sensitivity
Javascript is a case sensitive language. Variable names and function names are case sensitive i.e, capitalisation matters. 

## Mathematical Operations

### Basic Arithmetic
Addition
```javascript
var sum = 10 + 15;
console.log(sum);
```
Subtraction
```javascript
var difference = 50 - 15;
console.log(difference);
```
Multiplication
```javascript
var product = 10 * 8;
console.log(product);
```
Division
```javascript
var quotient = 66/11;
console.log(quotient);
```

### Increment and Decrement
To increment a number means to add 1 to a number.
```javascript
var myVar = 54;
myVar = myVar + 1;
//Instead of doing this use ++
myVar++;
```
To decrement a number means subtracting 1 from the number. 
```javascript
var myVar = 48;
myVar = myVar - 1;
//Instead of doing this use --
myVar--;
```

### Decimal Numbers
Also called as floating point nnumbers. Multiplying and Dividing decimal numbers is same as integers.
```javascript
var myDecimal = 4.008;
```
### Finding Remainder
Remainder symbol %. It gives remainder of the division of two numbers.
```javascript
var remainder;
remainder = 11 % 3;
```
Remainder often used to find whether a number is even or odd, if the remainder is 0 when a number is divide by 2 then it is even else it is odd.

### Compound Assignment with Augmented Math Operations
#### Addition
```javascript
var a = 3;
var b = 15;

a = a + 12;
b = 8 + b;
//can be wrtiiten as 
a += 12;
b += 8;
```
#### Subtraction
```javascript
var a = 31;
var b = 15;

a = a - 9;
//can be wrtiiten as 
a -= 9;
```
#### Multiplication
```javascript
var a = 3;
var b = 5.5;

a = a * 12;
b = 8 * b;
//can be wrtiiten as 
a *= 12;
b *= 8
```

#### Multiplication
```javascript
var a = 33;

a = a / 3;
//can be wrtiiten as 
a /= 3;
```

## Strings

Strings are characters surrounded by single('') or double("") quotation marks or backticks(``).
### Declaring String Variables

```javascript
var firstName = "Charles";
var lastName = "Babbage";
```

### Escaping Literal Quotes in Strings
Sometimes we need  quotes in our strings, normally the quotes indentify the beginning and ending of the string. If we have a string like this: I am " double quoted string" inside double quotes.
```javascript
var myStr = "I am" double quoted string" inside double quotes";
console.log(myStr);
```
But javascript thinks "I am" and " inside double quotes" as two different strings and throws an error. It sees first quote inside the string after _am a_ and thinks it is the end of the string. If we want to escape a quote, that means it will no longer be considered as end of string. We use backslash before the quote and javascript no longer interprets it a being the end of string.
```javascript
var myStr = "I am\" double quoted string\" inside double quotes";
console.log(myStr);
```
### Quoting Strings with Single Quotes and Backticks
Alterante to using escap character(\) is starting and ending the string using single quote. Backticks can be used to enclose both single and double quotes in a string.
```javascript
var myStr = 'I am" double quoted string" inside double quotes';
console.log(myStr);
//Backticks
var myStr1 = `'I am" double quoted string" inside double quotes'`;
console.log(myStr1);
```
### Escape Sequences in Strings
\\' single quote  <!--Added extra backslash cuz of markdown-->  
\\" double quote  <!--Added extra backslash cuz of markdown-->  
\\\ backslash  <!--Added extra backslash cuz of markdown-->  
\n newline  
\r carriage return  
\t tab  
\b backspace  
\f form feed  

### Concatenating Strings with Plus Operator
Strings can be concatenated using plus operator
```javascript
var myName = "Ada" + " Lovelace";
//Output: Ada Lovelace

var firstName = "Ada";
var fullName = firstName + " Lovelace";
//Output: Ada Lovelace
```

### Concatenating Strings with Plus Equals Operator
```javascript
var myString = "I come first. ";
myString += "I come second";
//Output: I come first. I come second
```

### Constructiing Strings with Variables
```javascript
var myName = "Ada";
var myStr = "Hello, my name is " + myName +", how are you?";
//Output: Hello, my name is Ada, how are you?
```
### Appending Variables to Strings
```javascript
var firstName = "Ada ";
var lastName = "Lovelace";
firstName += lastName;
//Output: Ada Lovelace
```
### Find Length of String
```javascript
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
//Output: 3
```
### Bracket Notation to Find First Character in String
Bracket notation is a way to get a character at a specific location in the string. Most programming languages including javascript don't start counting from 1 but from 0 this is called as zero base indexing. With number 0 refers to the first character in the string.
```javascript
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
//Output: A
```  

### String Immutability
Strings are immutable, that means they cannot be altered/edited once created. This does not mean it cannot be changed, just that the indivdual character in the string literal cannot be changed.
Below example 
```javascript
var myGreeting = "Jood Morning";
myGreeting[0] = "G"; // This does not change the string
// To Change the string
myGreeting = "Good Morning";
```

### Bracket Notation to Find Nth Character in String
Bracket notation can be used to get any position in the string.
```javascript
var secondLetterOfFirstName = "";
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
//Output: d
```  

### Bracket Notation to Find Last Character in String
Even if the number of characters in a string is not known, bracket notation can be used to find the last character of the string.
```javascript
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; //remember counting starts from 0, 8-1 = 7
//Output: e
``` 
## Arrays
Arrays allow you to store several pieces of data in one place. Arrays start dn end with bracket to show the beginning and ending of the array. Elements in the array are seperated by comma. Array elements can have any data type.
```javascript
var myArray = ["Lovelace", 1815];
```
### Nested Arrays
When one of the elements in arrray is an another array, that' called a nested array or multidimensional array.
```javascript
var myArray = [["Lovelace", 1815], ["Analytical Engine", 1842]];
```
### Access Array Data with Indexes
Similar to how characters are accessed in strings, elements in array are accessed with bracket notation.
```javascript
var myArray = ["Lovelace", 1815];]
var myData = myArray[0];
//Output: Lovelace
```

### Modify Array Data With Indexes
Array indexes can be used to modify arrays. Earlier we tried doing this for strings but we were not able to modify string using bracket notation because of immutability of strings.
```javascript
var myArray = [18,64,99];
myArray[1] = 45; 
// 18, 45, 99
```
### Access Multi-Dimensional Arrays With Indexes
In below example first bracket is index of first element that is an array, second bracket is index of the array within the array and so on.
```javascript
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[1][2];
//Output: 6
var myData1 = myArray[3][0][1];
//Output: 11
```

### Manipulate Arrays with push()
To append data at the end of the array we use push() fucntion.
```javascript
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
myArray.push(["dog", 3])
```

### Manipulate Arrays with pop()
We can remove last item from an array with the pop() function.
```javascript
var ourArray = [1,2,3]; 
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray[0].pop();// removes 23
```

### Manipulate Arrays with shift()
Shift function is similar to pop function except it removes the first element of the array instead of final element.
```javascript
var ourArray = ["Stimpson", "J", ["cat"]]; 
var removedFromOurArray = ourArray.shift();
```
### Manipulate Arrays with unshift()
Unshift function is similar to push function except it adds element at the start of the array instead of at the end.
```javascript
var ourArray ["Stimpson", "J", "cat"]; 
ourArray.shift(); // ourArray now equals ["J", "cat"] 
ourArray.unshift("Happy");
```
