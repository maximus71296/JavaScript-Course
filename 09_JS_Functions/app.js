// Value Passing Function
function printNumbers(startNumber, endNumber, increament){
    let result ='';
for(let i=startNumber; i<=endNumber; i+=increament){
    result += `${i} `;
}
console.log(result);
}

printNumbers(2, 20, 2); // Function Call/ Execution
printNumbers(10, 1000, 10); // Function Call/ Execution

// Function withour parameters
function greet(){
    console.log('Good Morning! Sir Maximus');
}

greet();

// Function Expression
let greetMe = function(){
    console.log('Good Morning! Master Maximus');
};

greetMe();

// Function with Paramaeters
let wishMe = function(name, age){
    let message = `Hello ${name}. Your age is ${age}.`
    console.log(message);
};

wishMe('Maximus', 25);

// Function with Return Type
let sum = function(a, b){
    let result = 2 * (a + b);
    return result;
};

let output = sum(10, 20);
console.log(output);

// Function with an object as a paramater
let printObject = function(obj){
    console.log(obj);
};

printObject({name: 'Rajat', age: 25});

let mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 79000
};

printObject(mobile);

// Function with an array as parameter
let printArray = function (array){
    let result ='';
    for(let index in array){
        result += `Index: ${index}  => Value: ${array[index]} \n`;
    }
    console.log(result);
};

printArray([10, 20, 30, 40]);

let colors = ['WHITE', 'BLACK', 'RED', 'YELLOW', 'BLUE'];
printArray(colors);

// Function inside an object
let student = {
    firstName: 'Rajat',
    lastName: 'Gautam',
    fullName: function(){
        return 'Rajat Gautam';
    }
};

console.log(student);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName());

// Nested Function
let outerFn = function(){
    console.log('I am an OUTER FUNCTION');
    let innerFn = function(){
        console.log('I am an INNER FUNCTION');
    }
    innerFn();
};
outerFn();

// Twisted Function
let twsiterFn = function(){
    let name = 'Rajat';
    let printStudent = function(){
        let student = {
            name: 'Marcus',
            age: 34,
            course: 'CSE' 
        };
        return student;
    };
    return printStudent;
};

let maxTwist = twsiterFn();
let studentObj = maxTwist();
console.log(studentObj);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.course);

// Prepare Chicken Curry with Functions
let glassBowl = function(rawChicken, masala){
    // Marinating the Chicken
    let marinatedChicken = `MIXING: (${rawChicken} + ${masala})`;
    return marinatedChicken;
};

let cookingBowl = function(marinatedChicken, water){
    // Cooking Logic
    let cookedChicken = `Cooking: (${marinatedChicken} + ${water})`;
    return cookedChicken;
};

let eatingPlate = function(cookedChicken, rice){
    // Eating Logic
    let eating = `Eating: ${cookedChicken} + ${rice}`;
    console.log(eating);
};

let rawChicken = '3Kg Chicken';
let masala = 'Garlic, Pepper, Salt';
let marinatedChicken = glassBowl(rawChicken, masala);
let water = '1Lt Water';
let cookedChicken = cookingBowl(marinatedChicken, water);
let rice = '1Kg Rice';
eatingPlate(cookedChicken, rice);

