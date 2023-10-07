// Fetch form and error div
const form = document.querySelector("[data-js-form]"),
  inputEl = document.querySelector("[data-js-input]"),
  error = document.querySelector("[data-js-error]");

// Validate email function
const emailValidate = () => {
  input = inputEl.value.trim();

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input === "") {
    error.textContent = "Email address can't be empty";
  } else if (!input.match(validEmail)) {
    error.textContent = "Please enter a valid email address";
  } else {
    error.textContent = "";
  }
};

// Validate form on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailValidate();
});
