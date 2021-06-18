const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonClaim = document.querySelector("#claimfree");
const formClaim = document.querySelector("#formclaim");
const warningFirst = document.querySelector("#warningfirst");
const warningLast = document.querySelector("#warninglast");
const warningEmail = document.querySelector("#warningemail");
const warningPassword = document.querySelector("#warningpassword");
const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

formClaim.addEventListener('submit', (event) => {
    event.preventDefault();
});

buttonClaim.addEventListener('click', () => {
    if (firstName.value == '') {
        warningFirst.textContent = "First Name cannot be empty";
        firstName.style.borderColor = 'red';
        firstName.placeholder = "";
    } else {
        warningFirst.textContent = " ";
        firstName.style.borderColor = '#DEDEDE';

    }

    if (lastName.value == '') {
        warningLast.textContent = "Last Name cannot be empty";
        lastName.style.borderColor = 'red';
        lastName.placeholder = "";
    } else {
        warningLast.textContent = " ";
        lastName.style.borderColor = '#DEDEDE';

    }

    if (!email.value.match(regEmail)) {
        warningEmail.textContent = "Looks like this is not an email";
        email.style.borderColor = 'red';
        email.placeholder = "";
    } else {
        warningEmail.textContent = " ";
        email.style.borderColor = '#DEDEDE';

    }

    if (password.value == '') {
        warningPassword.textContent = "Password cannot be empty";
        password.style.borderColor = 'red';
        password.placeholder = "";
    } else {
        warningPassword.textContent = " ";
        password.style.borderColor = '#DEDEDE';

    }

    if ((lastName.value !== '') && (firstName.value !== '') && (password.value !== '') && (email.value.match(regEmail))) {
        lastName.value = '';
        firstName.value = '';
        password.value = '';
        email.value = '';

    }


});