/*
    let -> keyword to declare a variable
    a -> variable name/ reference variable
    = -> assignment operator
    10 -> value/ data
    ; -> end of the statement
*/

let a = 100;
let b = 200; 
let sum = a + b;
console.log('The sum of ' + a + ' and ' + b + ' is: ' + sum); // ES5

//ES6 -> Template String/ template Literal (``) back tick
console.log(`The sum of ${a} and ${b} is: ${sum}`);

/* Rules of Variable Declaration in JavaScript
    1. All variables are case sensitive.
    2. All variable names must be in camelCase. Eg: myEmployeeName
    3. Maximus allowed characters is 15. Not more than 15. 
    4. Character allowed: a-z , A-Z , _ , $ , 0-9
    5. Variable name must not start with a number. 
    6. A variable mustn't be re-declared.
 */