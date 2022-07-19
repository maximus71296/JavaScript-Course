// Key Up Event
let textBox = document.querySelector('#username');
textBox.addEventListener('keyup', function () {
    let textEntered = textBox.value;
    let messageElement = document.querySelector('#msg');
    messageElement.innerText = textEntered;
});