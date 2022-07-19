let cameraBrand = 'Canon';
let cameraPrince = 35000;
let cameraColor = 'Black';

// JavaScript Object
let camera = {
    brand : 'Canon',
    price : 35000,
    color : 'Black',
    mfg : 2019
};

console.log(camera);

//Access the properties of an object
console.log(camera.brand);
console.log(camera.price);
console.log(camera.color);
console.log(camera.mfg);

// Access the non-existing properties
console.log(camera.megaPixel); // Undefined

// Access the properties using dot , [] notation
console.log(camera.price); // Dot (.) Notation -> 35000
console.log(camera['brand']); // [] Notation -> Canon

// For Dynamic Properties Dot (.) and [] Notation
let property = 'mfg';
console.log(camera.property); // Undefined 
console.log(camera[property]); // 2019

// Nested Object
let student = {
    name : 'Rajat Gautam',
    age : 25, 
    course : 'MCA',
    address : {
        locality : 'Choutina Kuwa', 
        city : 'Bikaner',
        state : 'Rajasthan'
    }
};

//Access Nested Object
console.log(student);
console.log(student.address);

// Access the properties of the nested object
console.log(student.address.locality);
console.log(student.address.city);
console.log(student.address.state);

// CRUD Operations with an object

// Create Operation
let mobile = {};

mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 78000;
mobile.isInsured = true;
console.log(mobile);

// Read Operation
console.log(mobile.brand);

// Update Operation
console.log(mobile.price);
mobile.price = 131000 
console.log(mobile);

// Delete Operation
delete mobile.isInsured;
console.log(mobile);