let hailTheLords = (message, color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px'
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Lord Maximus Button Logic
let maxButton = document.querySelector('#max_btn');
maxButton.addEventListener('click', function() {
    hailTheLords('!!--Hail Lord Maximus--!!', 'black');
});

// Lord Viktor Button Logic
let vikButton = document.querySelector('#vik_btn');
vikButton.addEventListener('click', function() {
    hailTheLords('!!--Hail Lord Viktor--!!', 'red');
});

// Lord Marcus Button Logic
let marButton = document.querySelector('#mar_btn');
marButton.addEventListener('click', function() {
    hailTheLords('!!--Hail Lord Marcus--!!', 'purple');
});

// Lord Cassius Button Logic
let casButton = document.querySelector('#cas_btn');
casButton.addEventListener('click', function() {
    hailTheLords('!!--Hail Lord Cassius--!!', 'blue');
});


