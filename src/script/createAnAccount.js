const createBtn = document.querySelector("#create-account-btn");
createBtn.addEventListener("click", () => {
  alert("Account created successfully! (simulation)");
});

const backToLogin = document.querySelector("#go-to-login");

backToLogin.addEventListener("click", () => {
  window.location.href = "./login.html";
});

const goToForgot = document.querySelector("#go-to-forgot");

goToForgot.addEventListener("click", () => {
  window.location.href = "./forgot.html";
});
