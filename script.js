function toggleNav() {
  document.querySelector(".sideBar").classList.toggle("hide");
  document.querySelector(".subContainer").classList.toggle("slide");
}
var removeRegistrationVisibility = (event) => {
  if (
    event.target != document.querySelector(".registrationFormContainer") &&
    event.target != document.querySelector("#registrationClose")
  ) {
    return;
  }
  document
    .querySelector(".registrationFormContainer")
    .classList.add("removeRegistrationForm");
};
var showRegistrationVisibility = () => {
  document
    .querySelector(".registrationFormContainer")
    .classList.remove("removeRegistrationForm");
};
window.onload = () => {
  document.getElementById("toggleNav").addEventListener("click", toggleNav);
  document
    .querySelectorAll(".navLink")
    .forEach((el) => el.addEventListener("click", toggleNav));
  document
    .getElementById("registrationClose")
    .addEventListener("click", removeRegistrationVisibility);
  document
    .getElementById("toggleRegistration")
    .addEventListener("click", showRegistrationVisibility);
  document
    .querySelector(".registrationFormContainer")
    .addEventListener("click", removeRegistrationVisibility);
};
