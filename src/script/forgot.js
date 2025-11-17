const forgotBtn = document.querySelector("#forgot-start");
forgotBtn.addEventListener("click", () => {
  window.location.href = "./forgot.html";
});

const createBtn = document.querySelector("#create-start");

createBtn.addEventListener("click", () => {
  window.location.href = "./createAnAccount.html";
});
