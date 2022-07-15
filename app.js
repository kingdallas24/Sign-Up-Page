const form = document.getElementById("sign-up");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const password2 = document.getElementById("pwd2");
const errorMsg = document.getElementsByClassName("errorMsg");
const validIcon = document.getElementsByClassName("valid-icon");
const invalidIcon = document.getElementsByClassName("invalid-icon");

firstName.addEventListener("blur", validateFirstName);
lastName.addEventListener("blur", validateLastName);
username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
password2.addEventListener("input", validatePassword2);

function validateFirstName() {
  const firstNameRegex = /^[a-z'-]+$/i;

  firstNameResult = firstNameRegex.test(firstName.value);

  if (firstNameResult === false) {
    if (firstName.value === "") {
      errorMsg[0].textContent = "First name field cannot be blank.";
      invalidIcon[0].style.opacity = "1";
      validIcon[0].style.opacity = "0";
      firstName.classList.add("invalid");
      firstName.classList.remove("valid");
    } else {
      errorMsg[0].textContent = "Please enter a valid first name.";
      invalidIcon[0].style.opacity = "1";
      validIcon[0].style.opacity = "0";
      firstName.classList.add("invalid");
      firstName.classList.remove("valid");
    }
  } else {
    errorMsg[0].textContent = "";
    validIcon[0].style.opacity = "1";
    invalidIcon[0].style.opacity = "0";
    firstName.classList.add("valid");
    firstName.classList.remove("invalid");
  }
}

function validateLastName() {
  const lastNameRegex = /^[a-z'-]+$/i;

  lastNameResult = lastNameRegex.test(lastName.value);

  if (lastNameResult === false) {
    if (lastName.value === "") {
      errorMsg[1].textContent = "Last name field cannot be blank.";
      invalidIcon[1].style.opacity = "1";
      validIcon[1].style.opacity = "0";
      lastName.classList.add("invalid");
      lastName.classList.remove("valid");
    } else {
      errorMsg[1].textContent = "Please enter a valid last name.";
      invalidIcon[1].style.opacity = "1";
      validIcon[1].style.opacity = "0";
      lastName.classList.add("invalid");
      lastName.classList.remove("valid");
    }
  } else {
    errorMsg[1].textContent = "";
    validIcon[1].style.opacity = "1";
    invalidIcon[1].style.opacity = "0";
    lastName.classList.add("valid");
    lastName.classList.remove("invalid");
  }
}

function validateUsername() {
  const usernameRegex = /^[\w]{5,15}([ ])?$/;

  usernameResult = usernameRegex.test(username.value);

  if (usernameResult === false) {
    errorMsg[2].textContent =
      "Please enter a valid username. Letters, numbers, and underscores are acceptable.";
    invalidIcon[2].style.opacity = "1";
    validIcon[2].style.opacity = "0";
    username.classList.add("invalid");
    username.classList.remove("valid");
    if (username.value === "") {
      errorMsg[2].textContent = "Username field cannot be blank.";
    } else if (username.value.length < 5) {
      errorMsg[2].textContent = "Username needs to be minimum of 5 characters.";
    } else if (username.value.length > 15) {
      errorMsg[2].textContent = "Username can be maximum of 15 characters.";
    }
  } else {
    errorMsg[2].textContent = "";
    validIcon[2].style.opacity = "1";
    invalidIcon[2].style.opacity = "0";
    username.classList.add("valid");
    username.classList.remove("invalid");
  }
}

function validateEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  emailResult = emailRegex.test(email.value);

  if (emailResult === false) {
    errorMsg[3].textContent = "Please enter a valid email.";
    invalidIcon[3].style.opacity = "1";
    validIcon[3].style.opacity = "0";
    email.classList.add("invalid");
    email.classList.remove("valid");
    if (email.value === "") {
      errorMsg[3].textContent = "Email field cannot be blank.";
    }
  } else {
    errorMsg[3].textContent = "";
    validIcon[3].style.opacity = "1";
    invalidIcon[3].style.opacity = "0";
    email.classList.add("valid");
    email.classList.remove("invalid");
  }
}

function validatePassword() {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.+[\d])(?=.*[~!@#$%^&*()-_+=])[a-zA-z\d~!@#$%^&*()-_+=]{8,}$/;

  passwordResult = passwordRegex.test(password.value);

  if (passwordResult === false) {
    errorMsg[4].textContent =
      "Please enter a valid password. Password should contain one capital letter, one number, and be a minimum of 8 characters long.";
    invalidIcon[4].style.opacity = "1";
    validIcon[4].style.opacity = "0";
    password.classList.add("invalid");
    password.classList.remove("valid");
    if (password.value === "") {
      errorMsg[4].textContent = "Password field cannot be blank.";
    }
  } else {
    errorMsg[4].textContent = "";
    validIcon[4].style.opacity = "1";
    invalidIcon[4].style.opacity = "0";
    password.classList.add("valid");
    password.classList.remove("invalid");
  }
}

function validatePassword2() {
  if (password2.value !== password.value || password.value === "") {
    password2.setCustomValidity("Invalid");
    errorMsg[5].textContent = "Passwords do not match.";
    errorMsg[5].style.color = "red";
    invalidIcon[5].style.opacity = "1";
    validIcon[5].style.opacity = "0";
    password2.classList.add("invalid");
    password2.classList.remove("valid");
    if (password2.value === "") {
      errorMsg[5].textContent = "Please confirm password.";
    }
  } else {
    password2.setCustomValidity("");
    errorMsg[5].textContent = "Match Success.";
    errorMsg[5].style.color = "green";

    validIcon[5].style.opacity = "1";
    invalidIcon[5].style.opacity = "0";
    password2.classList.add("valid");
    password2.classList.remove("invalid");
  }
}

form.addEventListener("submit", (e) => {
  document.querySelectorAll("input").forEach((input) => {
    if (!input.validity.valid) {
      e.preventDefault();
      validateFirstName();
      validateLastName();
      validateUsername();
      validateEmail();
      validatePassword();
      validatePassword2();
    }
  });
});
