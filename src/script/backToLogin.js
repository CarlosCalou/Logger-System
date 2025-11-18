const backBtn = document.querySelector("#back-to-login");
backBtn.addEventListener("click", () => {
  window.location.href = "./login.html";
});

const username = document.querySelector("#username-forgot");
const password = document.querySelector("#password-forgot");
const passwordconfirmed = document.querySelector("#password-confirmed-forgot");
const button = document.querySelector("#forgot-send");
const checkbox = document.querySelector("#checkbox-forgot");

checkbox.addEventListener("change", () => {
  const type = password.getAttribute("type");
  if (type === "password") {
    password.setAttribute("type", "text");
    return;
  }
  password.setAttribute("type", "password");
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameValue = username.value;
  const passwordValue = password.value;
  const passwordValueConfirmed = passwordconfirmed.value;

  if (
    usernameValue === "" ||
    passwordValue === "" ||
    passwordValueConfirmed === ""
  ) {
    alert("Fill in all fields!");
    return;
  }

  const usernameSession = sessionStorage.getItem("username");
  const passwordSession = sessionStorage.getItem("password");

  if (passwordValue !== passwordValueConfirmed) {
    alert("Passwords don't match!");
    return;
  }

  if (usernameValue !== usernameSession) {
    alert("Username incorrect.");
    return;
  }

  alert("Password changed successfully!");
  window.location.href = "login.html";
});
