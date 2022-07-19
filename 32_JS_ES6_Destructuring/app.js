// Desturucturing ES6
let student = {
    name : 'Rajat Gautam',
    age : 25,
    course : 'MCA',
    address : {
        locality : 'Choutina Kuwa',
        city : 'Bikaner',
        state : 'Rajasthan'
    },
    hobbies : {
        regular : {
            id : 1,
            regHobbies : ['Badminton', 'Video Games', 'Horse Riding']
        },
        occasional : {
            id : 2,
            occHobbies : ['Swimming', 'Volley Ball', 'Trap Shooting']
        }
    }
};

let {locality, city, state} = student.address;
console.log(`LOCALITY: ${locality}
CITY: ${city}
STATE: ${state}`);

let {regHobbies} = student.hobbies.regular;
console.log(regHobbies);