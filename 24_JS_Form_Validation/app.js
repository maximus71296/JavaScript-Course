// Form Validation
let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event) { 
    event.preventDefault(); // stops auto form submission
    if(validateForm()){
        alert('Form is submitted successfully');
    }
});

let validateForm = () => {
    return(checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword());
};

let checkUsername = () => {
    let userNameEl = document.querySelector('#username');
    let userNameFb = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9]{2,25}$/;
    if(regExp.test(userNameEl.value)){
        makeValid(userNameEl, userNameFb);
        return true;
    }
    else{
        makeInvalid(userNameEl,userNameFb);
        return false;
    }
};

let checkEmail = () => {
    let userNameEl = document.querySelector('#email');
    let userNameFb = document.querySelector('#email-feedback');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(userNameEl.value)){
        makeValid(userNameEl, userNameFb);
        return true;
    }
    else{
        makeInvalid(userNameEl,userNameFb);
        return false; 
    }
};

let checkPassword = () => {
    let userNameEl = document.querySelector('#password');
    let userNameFb = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(userNameEl.value)){
        makeValid(userNameEl, userNameFb);
        return true;
    }
    else{
        makeInvalid(userNameEl,userNameFb);
        return false;
    }
};

let checkConfirmPassword = () => {
    let userNameEl = document.querySelector('#c-password');
    let passwordEl = document.querySelector('#password');
    let userNameFb = document.querySelector('#c-password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(userNameEl.value) && userNameEl.value === passwordEl.value){
        makeValid(userNameEl, userNameFb);
        return true;
    }
    else{
        makeInvalid(userNameEl,userNameFb);
        return false;
    }
};

// makeValid Function Definition
let makeValid = (userNameEl, userNameFb) => {
    userNameEl.classList.add('is-form-valid');
    userNameEl.classList.remove('is-form-invalid');
    userNameFb.classList.add('text-success');
    userNameFb.classList.remove('text-danger');
    userNameFb.innerText = `Looks Good`;

};

//makeInvalid Function Definition
let makeInvalid = (userNameEl, userNameFb) => {
    userNameEl.classList.remove('is-form-valid');
    userNameEl.classList.add('is-form-invalid');
    userNameFb.classList.remove('text-success');
    userNameFb.classList.add('text-danger');
    userNameFb.innerText = `Please enter a ${userNameEl.placeholder}`;

};

// Username Field with Keyup event
let inputElUser = document.querySelector('#username');
inputElUser.addEventListener('keyup', function () {
    checkUsername();
});

// Email Field with Keyup event
let inputElEmail = document.querySelector('#email');
inputElEmail.addEventListener('keyup', function () {
    checkEmail();
});

// Password Field with Keyup event
let inputElPass = document.querySelector('#password');
inputElPass.addEventListener('keyup', function () {
    checkPassword();
});

// Confirm Password Field with Keyup event
let inputConPass = document.querySelector('#c-password');
inputConPass.addEventListener('keyup', function () {
    checkConfirmPassword();
});


