// Date Object
let date = new Date();
console.log(date);

// Proper Date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// USA Date
let option = {timeZone : 'America/New_York' };
let usaDate = new Date().toLocaleDateString('en-US', option);
console.log(usaDate);

// USA Time
option = {timeZone : 'America/New_York' };
let usaTime = new Date().toLocaleTimeString('en-US', option);
console.log(usaTime);

// Today
let today = new Date().getDay();
console.log(today);

// Month
let currentMonth = new Date().getMonth();
console.log(currentMonth);

// Custom Date
let customDate = new Date().getDate();
let customeMonth = new Date().getMonth() + 1;
let customYear = new Date().getFullYear();
console.log(`${customDate}-${customeMonth}-${customYear}`);
console.log(`${customDate}.${customeMonth}.${customYear}`);
console.log(`${customDate}/${customeMonth}/${customYear}`);