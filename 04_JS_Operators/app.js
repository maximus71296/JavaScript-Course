/*
    JavaScript Operators
    ---------------------

    -> Assignment Operators: =
    -> Airthmatic Operator: + - * / %
    -> Short Hand Math Operators: += , -= , *= , /=
    -> Conditional Operators: < , > , <= , >= , !==
    -> Unary Operators: ++ , --
    -> Logical Operators: && , || , ^
    -> Ternary Operators: ?:
    -> Equality Operators: == , ===
 */

    
// Assignment Operators: =
let test = 10; 
console.log(test);

// Airthmatic Operator: + - * / %
let num1 = 400;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

// Even or Odd
let num = 13;
if(num % 2 === 0){
    console.log(`${num} is an Even Number`);
}
else{
    console.log(`${num} is an Odd Number`);
}

// Short Hand Math Operators: += , -= , *= , /=
let a = 160; 
let b = 40;
let add = 10;
add += (a + b);
console.log(add);

// Conditional Operators: < , > , <= , >= , !==
let marks = 75;
if(marks <= 35){
    console.log('You failed the exam');
}
else{
    console.log('You cleared the exam');
}

// Unary Operators: ++ , --
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical Operators: && , || , ^
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents agreed')
}

// Ternary Operators: ?:
// Syntax: (condition) ? true : false;
marks = 65; 
let message = '';
(marks <= 35) ? message = 'You failed the exam' : message = 'You cleared the exam';
console.log(message);

// Equality Operators: == , ===
a = 32;
b = '32';
if(a === b){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');
}