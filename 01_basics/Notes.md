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
