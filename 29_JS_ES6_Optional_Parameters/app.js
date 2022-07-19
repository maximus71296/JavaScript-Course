// Optional Parameters
let greet = function (name, age = 25) {
    let msg = `Hello ${name}! Are you ${age} years old?`;
    console.log(msg);
};
greet('Maximus');

let printNumbers = function (start, end) {
    let result = '';
    for(let i = start; i<= end; i++){
        result += `${i} `;
    }
    console.log(result);
};

printNumbers(1,200);