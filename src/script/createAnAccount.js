const email = document.querySelector("#email-create");
const username = document.querySelector("#username-create");
const password = document.querySelector("#password-create");

const createBtn = document.querySelector("#create-account-btn");

createBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValue = email.value;
  const usernameValue = username.value;
  const passwordValue = password.value;

  if (emailValue === "" || usernameValue === "" || passwordValue === "") {
    alert("Fill in all fields!");
    return;
  }

  sessionStorage.setItem("email", emailValue);
  sessionStorage.setItem("username", usernameValue);
  sessionStorage.setItem("password", passwordValue);

  alert("Registration successful.");

  window.location.href = "login.html";
});

const backToLogin = document.querySelector("#go-to-login");

backToLogin.addEventListener("click", () => {
  window.location.href = "./login.html";
});

const goToForgot = document.querySelector("#go-to-forgot");

goToForgot.addEventListener("click", () => {
  window.location.href = "./forgot.html";
});
