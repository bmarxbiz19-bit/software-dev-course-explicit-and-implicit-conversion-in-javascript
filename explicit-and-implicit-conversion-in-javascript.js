/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);
/*Type coercion is taking place so no need to change anything*/

let isValid = Boolean("true");
/*Changed to "true" to maintain valid variable naming*/
if (isValid) {
    console.log("This is valid!");
}
else (0);

let age = Number("25");
/*Conversion to number, else answer will be 255.*/
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
