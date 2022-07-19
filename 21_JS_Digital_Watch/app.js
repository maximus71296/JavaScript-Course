// Indian Watch
let indianWatch = () => {
    let options = {timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#indian-date').innerText = currentDate;
    document.querySelector('#indian-time').innerText = currentTime;
};

setInterval(indianWatch, 1000);

// USA Watch
let usaWatch = () => {
    let options = {timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#usa-date').innerText = currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
};

setInterval(usaWatch, 1000);

// Germany Watch
let germanyWatch = () => {
    let options = {timeZone : 'Europe/Berlin'};
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#germany-date').innerText = currentDate;
    document.querySelector('#germany-time').innerText = currentTime;
};

setInterval(germanyWatch, 1000);