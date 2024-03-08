# 3 ways to declare variables in JS.
- const: to declare constants, as the name sames they can't bed mutated once declared.
- let: to declare variables, which can be edited, within thw scope. Solves the issue of scope.
- var: same as let, used before let was intrdouced no concept of scope.
- Decalring variable without initial will be assigned undefined.

# Datatypes and ECMA standards
- There are older versions of JS where there are no arrow functions, classes.
- "usestrict" treat all JS code as new version, nowadays no need to write this too.
- alert(3 + 3) // will throw error cuz it works in html or dev console, works in browser like env but we are in node, there is diff syntax for alert in node
- Data Types in JS
    - Number => 2 to power 53
    - bigint => rarely used
    - string => ""
    - null => standalone value, representation of empty value, "" is not equal to null, it is an empty string it has been assigned type as string.
    - undefined => when variable is declared but value is assigned not yet.
    - symbols => used for uniqueness.

    typeof used to get type, 
    - typeof null = object
    - typeof undefined = undefined, undefined is an type itself.

# Datatype conversion confusion
We want to convert from one datatype to another, for eg: string to data, say frontend has sent numerical value as a string but we want number for processing. We use `Number()` class, some cases `Number("123abc")` will give typeof as number but value is NaN.

# String to number conversion
```javascript
"1"+2 = 1+"2" = 12
"1"+2+2 = 122
1+2+"2" = 32
1+"2"+2 = 122
clog(+true) = 1 //boolean is converted to number
clog(+"") = 0 //empty string is false
```

# Comparisons
Always compare same data types, comparing different data types gives unpredicted results.
Equality check == and comparisons > < >= <= work differently in JS.
Null is sometimes converted to 0, NaN
Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

==,===,(>=,<=) all three have different syntax of working.
Strict check
=== : checks data type also, doesn't convert 
clog("2"===2), here string "2" is not converted.

| **Type of** val                                     | Result                                                                                          |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Undefined                                           | `"undefined"`                                                                                   |
| Null                                                | `"object"`                                                                                      |
| Boolean                                             | `"boolean"`                                                                                     |
| Number                                              | `"number"`                                                                                      |
| String                                              | `"string"`                                                                                      |
| Object (native and does not implement [[Call]])     | `"object"`                                                                                      |
| Object (native or host and does implement [[Call]]) | `"function"`                                                                                    |
| Object (host and does not implement [[Call]])       | Implementation-defined except may not be `"undefined"`, `"boolean"`, `"number`", or `"string".` |

https://262.ecma-international.org/5.1/#sec-11.4.3
## Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

## Non-Primitive
 Refernce (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.

#### Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.

# Stack and Heap
Refer stack-and-heap.md

# Strings
Using "+" for concatenating is not recommend now in JS. Use backticks (``).
Backticks allow for 'string interpolation': We create placeholders, to inject values of variables.
Backticks also allow for any operations to be done on these placeholder variables for eg: name.toUpperCase() 
We can use String obj to declare a new string, this gives us a string object with key-value pairs, it is not an array and its indices, {0:h,1:r,....} are key value pairs, run code in browser-console to see.
`javascript
const myName = new String('Hrithik')
`
Can see all the methods we can use on String, in the browser-console.
When we use this syntax for creating a string, it is both an object and also primitive string. We can observe it in browser-console, and use methods/funs for both objects and string.
substring(): ignores negative values.
slice(): negative values-starts in reverse order.