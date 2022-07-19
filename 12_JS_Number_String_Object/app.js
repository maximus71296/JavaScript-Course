// Number Related Functions
// Minimum number
console.log(Number.MIN_SAFE_INTEGER);

// Maximus Number
console.log(Number.MAX_SAFE_INTEGER);

// Positive Infinity
console.log(Number.POSITIVE_INFINITY);

// Negative Infinity
console.log(Number.NEGATIVE_INFINITY);

// Parse Int -> Change String to Integer
let str = '100';
console.log(typeof str);
let num1 = Number.parseInt(str);
console.log(`${typeof str} => ${typeof num1}`);

// Parse Float -> Change String to Float
let str2 = '100.134';
console.log(typeof str);
let num2 = Number.parseFloat(str);
console.log(`${typeof str} => ${typeof num1}`);

// To String -> Change Number to String
let num3 = 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);

// to Fixed
let amount = 340;
console.log(amount.toFixed(2));

// String Related Operations
let msg = String('GOOD MORNING! SIR MAXIMUS');
console.log(msg);

// Length
console.log(msg.length);

// Lower Case
console.log(msg.toLowerCase());

// Upper Case
console.log(msg.toUpperCase());

// Sub String (start index, number of characters)
console.log(msg.substring(0,4)); // GOOD
console.log(msg.substring(5));

// chatAT
console.log(msg.charAt(5));

// charCode
console.log(msg.charCodeAt(7));

// JSON Object
/*
    Convert String => Object : parse()
    Convert Object => String : stringify()
 */
let student = {
    name: 'Rajat',
    age: 25, 
    course: 'MCA',
    college: 'JNU Jaipur'
};
console.log(student);

// Object to String
let studentStr = JSON.stringify(student);
console.log(studentStr);

// String to Object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);