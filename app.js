let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let form = id("sign-up"),
  firstName = id("firstName"),
  lastName = id("lastName"),
  email = id("email"),
  username = id("userName"),
  password = id("pwd"),
  password2 = id("pwd2"),
  errorMsg = classes("errorMsg"),
  validIcon = classes("valid-icon"),
  invalidIcon = classes("invalid-icon");

form.addEventListener("input", (e) => {
  checkInput(firstName, 0);
  checkInput(lastName, 1);
  checkInput(username, 2);
  checkInput(email, 3);
  checkInput(password, 4);
  checkInput(password2, 5);
});

function checkInput(id, index) {
  id.addEventListener("blur", (e) => {
    if (id.validity.valid) {
      validIcon[index].style.opacity = "1";
      invalidIcon[index].style.opacity = "0";
      id.classList.add("valid");
    } else {
      validIcon[index].style.opacity = "0";
      invalidIcon[index].style.opacity = "1";
      id.classList.add("invalid");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(firstName, 0, "First name field is required.");
  engine(lastName, 1, "Last name field is required.");
  engine(username, 2, "Username field is required.");
  engine(email, 3, "Email field is required.");
  engine(password, 4, "Password field is required.");
  engine(password2, 5, "Password confirm field is required.");
});

// Submit error
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].textContent = message;
    invalidIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].textContent = "";
    validIcon[serial].style.opacity = "1";
    invalidIcon[serial].style.opacity = "0";
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (firstName.validity.valid) {
      input.style.backgroundImage = "url(./images/valid.svg)";
    }
  });
});

// Input error

// inputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     checkInput();
//   });
// });

// function checkInput(input, serial) {
//   if (input.validity.valid) {
//     validIcon[serial].style.opacity = "1";
//     invalidIcon.style.opacity = "0";
//   } else {
//     invalidIcon[serial].style.opacity = "1";
//     validIcon.style.opacity = "0";
//   }
// }

// errorMsg[0].textContent = "Please enter your first name.";
// errorMsg[1].textContent = "Please enter your Last name.";
// errorMsg[2].textContent =
//   "Username needs to between 4-15 character, only letters, numbers, and underscores.";
// errorMsg[3].textContent = "Please enter a valid email.";
// errorMsg[4].textContent =
//   "Password needs at least 1 capital letter, 1 number, one special character, and be between 4-18 characters.";
// errorMsg[5].textContent = "Enter password again.";

// inputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     if (input.validity.valid) {
//       input.style.backgroundImage = "url(./images/valid.svg)";
//     } else if (!input.validity.valid) {
//       input.style.backgroundImage = "url(./images/invalid.svg)";
//     }
//   });
// });

// form.addEventListener("submit", (e) => {});
