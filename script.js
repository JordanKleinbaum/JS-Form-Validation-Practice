const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const errorText = document.querySelector(".error-text");
const thanksText = document.querySelector(".thanks-text");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value;
  if (validateEmail(emailValue)) {
    errorText.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
    thanksText.style.visibility = "visible";
    email.style.border = "1px solid green";
    email.value = "";
  } else {
    errorText.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    thanksText.style.visibility = "hidden";
    email.style.border = "3px solid var(--HotPink)";
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
