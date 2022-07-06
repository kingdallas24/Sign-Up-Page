let pwd = document.querySelector("#password");

let pwd2 = document.querySelector("#password2");

let message = document.querySelector("#message");

function passwordValidation() {
  if (pwd2.value == pwd.value) {
    message.textContent = "Passwords match";
    message.classList.add("validMsg");
    message.classList.remove("invalidMsg");
  } else {
    message.textContent = "Passwords do not match";

    message.classList.add("invalidMsg");
    message.classList.remove("validMsg");
  }
}

pwd2.addEventListener("input", (e) => {
  passwordValidation();
});
