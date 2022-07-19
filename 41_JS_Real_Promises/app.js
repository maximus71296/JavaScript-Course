let employees = [{id : 1 , name : 'Marcus Maximus' , age : 25},
                 {id : 2 , name : 'Viktor Cassius' , age : 37}];
                 
// Create Employee
let createEmployee = (employee) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            employees.push(employee);
            let isDone = true;
            if(isDone){
                resolve();
            }
            else{
                reject('Something Went Wrong!!');
            }
        }, 2000);
    });
};

// Get Employee
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

createEmployee({id : 3 , name : 'Korvus Klave' , age : 43}).then( () => {
    getEmployees();
}).catch( (err) => {
    console.error(err);
});
