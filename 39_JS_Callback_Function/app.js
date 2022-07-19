let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
    let result = '';
    return callback(a , b);
};

let output = calculate(10, 20, sum);
console.log(output);

output = calculate(10, 20, mul);
console.log(output);

output = calculate(100, 20, (a , b) => {
    return a - b;
});
console.log(output);

let employees = [{id : 1, name : 'Rajat', age: 25},
                 {id : 2, name : 'Rahul', age: 34}];

let createEmployee = (employee, callback) => {
    setTimeout( () => {
        employees.push(employee);
        callback();
    } , 2000);
};

let getEmployees = () => {
    setTimeout(() => {
        let employeeRow = '';
        employees.forEach( (employee) => {
            employeeRow += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                            </tr>`;
        });
        document.querySelector('#table-body').innerHTML = employeeRow;
    } , 1000);
};

createEmployee({id : 3, name : 'Ayush', age: 42}, getEmployees);
