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