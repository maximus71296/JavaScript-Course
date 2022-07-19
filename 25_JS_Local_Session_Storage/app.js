// Local Storage for simple string
let empName = 'Maximus';

// Set
localStorage.setItem('name', empName);

// Get
console.log(localStorage.getItem('name'));

// Delete the key
localStorage.removeItem('name');

// Clear
localStorage.clear();

// Local Storage with Array
let friends = [{id: 1, name: 'Rajat'},
              {id: 2, name: 'Ayush'},
              {id: 3, name: 'Toshiba'},
              {id: 4, name: 'Rahul'},
              {id: 5, name: 'Abhishek'},
              {id: 6, name: 'Vrinda'}];

localStorage.setItem('friends', JSON.stringify(friends));

let theFriends = JSON.parse(localStorage.getItem('friends'));
console.log(theFriends);

localStorage.clear();

// Session Storage

let studentName = 'Rajat';

// Set
sessionStorage.setItem('name', studentName);

// Get
console.log(sessionStorage.getItem('name'));

// Delete
sessionStorage.removeItem('name');

// Session Storage with Array
friends = [{id: 1, name: 'Rajat'},
              {id: 2, name: 'Ayush'},
              {id: 3, name: 'Toshiba'},
              {id: 4, name: 'Rahul'},
              {id: 5, name: 'Abhishek'},
              {id: 6, name: 'Vrinda'}];

sessionStorage.setItem('friends', JSON.stringify(friends));

theFriends = JSON.parse(sessionStorage.getItem('friends'));
console.log(theFriends);