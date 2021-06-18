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
const exclFirst = document.querySelector("#exclfirst");
const exclLast = document.querySelector("#excllast");
const exclEmail = document.querySelector("#exclemail");
const exclPassword = document.querySelector("#exclpassword");

formClaim.addEventListener('submit', (event) => {
    event.preventDefault();
});

buttonClaim.addEventListener('click', () => {
    if (firstName.value == '') {
        warningFirst.textContent = "First Name cannot be empty";
        firstName.style.borderColor = 'red';
        firstName.placeholder = "";
        exclFirst.style.display = "inline-block";
    } else {
        warningFirst.textContent = " ";
        firstName.style.borderColor = '#DEDEDE';
        exclFirst.style.display = "none";

    }

    if (lastName.value == '') {
        warningLast.textContent = "Last Name cannot be empty";
        lastName.style.borderColor = 'red';
        lastName.placeholder = "";
        exclLast.style.display = "inline-block";
    } else {
        warningLast.textContent = " ";
        lastName.style.borderColor = '#DEDEDE';
        exclLast.style.display = "none";

    }

    if (!email.value.match(regEmail)) {

        warningEmail.textContent = "Looks like this is not an email";
        email.style.borderColor = 'red';
        email.placeholder = "";
        email.style.color = 'red';
        exclEmail.style.display = "inline-block";


    } else {
        warningEmail.textContent = " ";
        email.style.borderColor = '#DEDEDE';
        exclEmail.style.display = "none";
        email.style.color = '#3D3B48';

    }

    if (password.value == '') {
        warningPassword.textContent = "Password cannot be empty";
        password.style.borderColor = 'red';
        password.placeholder = "";
        exclPassword.style.display = "inline-block";
    } else {
        warningPassword.textContent = " ";
        password.style.borderColor = '#DEDEDE';
        exclPassword.style.display = "none";

    }

    if ((lastName.value !== '') && (firstName.value !== '') && (password.value !== '') && (email.value.match(regEmail))) {
        lastName.value = '';
        firstName.value = '';
        password.value = '';
        email.value = '';
        lastName.placeholder = "Last Name";
        firstName.placeholder = "First Name";
        email.placeholder = "Email Address";
        password.placeholder = "Password";

    }


});