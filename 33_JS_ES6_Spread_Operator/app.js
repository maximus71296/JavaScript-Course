// Spread Operator 
let numbers = [10,20,30,40,50,60,70,80,90];
let max = Math.max(...numbers);
console.log(max);

let array1 = ['WHITE', 'BLACK', 'BLUE', 'RED', 'YELLOW'];
let array2 = ['ORANGE', 'PRUPLE', 'BROWN', 'VIOLET', 'INDIGO'];
let colors = [...array1, ...array2];
console.log(colors);
