// Creation of an Array
let numbers = [10 , 20 , 30];
console.log(numbers);

// Access the elements of the array
console.log(numbers['0']);
console.log(numbers['1']);
console.log(numbers['2']);

// Access the non-existing elements
console.log(numbers['3']); // Undefined

//Iteration of array elements
let colors = ['WHITE', 'BLACK', 'SILVER', 'PURPLE', 'BLUE', 'YELLOW'];

// Iterate the array using for loop
let result ='';
for(let i=0; i<=colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

// For-in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// For-of loop upto ES6
result = '';
for(let color of colors){
    result += `${color} `
}
console.log(result);

// forEach Function upto ES6
result = '';
colors.forEach(function(color){
    result += `${color} `;
});
console.log(result);

// forEach with Arrow function from ES6
result = '';
colors.forEach(color => {result += `${color} `});
console.log(result);

// Array of Employees
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

// Access all employees
console.log(employees);

// Access only one attribute of a particular object
console.log(employees[0].name);

// Iterate Employees
result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(result);

// Filter the Junior Employees : Age <= 30
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// Filter Active Employees
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

// Functions of arrya
// Shift() -> Remove the first element of the array
let technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
console.log(technologies);
console.log('--------------------- Functions of array ---------------------');
console.log('--------------------- Shift() ---------------------');
technologies.shift();
console.log(technologies);

// unShift() -> Add the first element of the array
console.log('--------------------- unShift() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.unshift('node JS');
console.log(technologies);

// push() -> Add the last element of the array
console.log('--------------------- push() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.push('node JS');
console.log(technologies);

// pop() -> Remove the last element of the array
console.log('--------------------- pop() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.pop();
console.log(technologies);

// sort() -> Sort the array in ascending order
console.log('--------------------- sort() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.sort();
console.log(technologies);

// reverse() -> reverse the array elements
console.log('--------------------- reverse() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.reverse();
console.log(technologies);

// Reverse order of elements
// Reverse Order -> Reverse the array elements on descending order
console.log('--------------------- Reverse Order ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.sort().reverse();
console.log(technologies);

// Splice(index) -> to remove/ replace from the middle
console.log('--------------------- splice(index) ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.splice(2);
console.log(technologies);

// Splice(index, no od elements) -> it removes the given no. of elements from the given index
console.log('--------------------- splice() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.splice(2,1);
console.log(technologies);

// Splice() -> it replace the given no. of elements from the given index
console.log('--------------------- splice() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
technologies.splice(2,1,'node JS');
console.log(technologies);

// Join() -> to join the array elements to string
console.log('--------------------- join() ---------------------');
technologies = ['html', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
console.log(technologies);
let techString = technologies.join('-');
console.log(techString);

// split() -> to split the array elements to string
console.log('--------------------- split() ---------------------');
console.log(techString);
let newTechstring = techString.split('-');
console.log(newTechstring);

// Filter the Junior Employees : Age <= 30
console.log('--------------------- filter() ---------------------');
let jrEmployees = employees.filter(function(employee){
    return employee.age <=30;
});
console.log(jrEmployees);




