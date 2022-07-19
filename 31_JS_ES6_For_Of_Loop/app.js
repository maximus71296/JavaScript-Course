// For-of Loop
let employees = [
    {
        id : 1,
        name : 'Rajat',
        age : 25,
        designation : 'CEO',
        isActive : true
    },

    {
        id : 2,
        name : 'Ayush',
        age : 46,
        designation : 'Senior Manager',
        isActive : false
    },

    {
        id : 3,
        name : 'Rahul',
        age : 34,
        designation : 'Software Engineer',
        isActive : true
    },

    {
        id : 4,
        name : 'Toshiba',
        age : 22,
        designation : 'Team Leader',
        isActive : false
    },

    {
        id : 5,
        name : 'Pooja',
        age : 30,
        designation : 'Agent',
        isActive : true
    }
];

// Normal For Loop
let result = '';
for(let i = 0; i <= employees.length-1; i++){
    let employee = employees[i];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// For In Loop upto ES5
result = '';
for(let index in employees){
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// For of Loop upto ES6
result = '';
for(let employee of employees){
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// for Each Function ES5
result = '';
employees.forEach(function (employee) {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

// forEach with Arrow Function
result = '';
employees.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

