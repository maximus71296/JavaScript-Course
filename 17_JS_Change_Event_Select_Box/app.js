// Change Event on Select Box
let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function () {
    let selectedOption = selectBox.value;
    let languageOptionEl = document.querySelector('#lang-option');
    languageOptionEl.innerText = selectedOption;
});