// Arrow Function
/*
    Function Types 
    1. Normal Function
    2. Function Expression
    3. Arrow Function
 */

// Normal Function
let result = '';
function printNumbeNF () {
    let msg = '';
    for(let i=1; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
}

result = printNumbeNF();
console.log(result);

// Function Expression
let printNumFE = function () {
    let msg = '';
    for(let i=50; i>=1; i--){
        msg += `${i} `;
    }
    return msg;
};

result = printNumFE();
console.log(result);

// Arrow Function
let printNumberAF = () => {
    let msg = '';
    for(let i=200; i>=150; i--){
        msg += `${i} `;
    }
    return msg;
};

result = printNumberAF();
console.log(result);

// Usage of Arrow Function
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

// Junior Employees
let juniorEmployees = employees.filter(function (employee) {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// Junior Employees with Arrow function
let jrEmployees = employees.filter(employee => employee.age <= 30);
console.log(juniorEmployees);

// Limitations of Arrow Functions
let student = {
    firstName : 'Rajat',
    lastName : 'Gautam',
    fullName : () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());





