// localStorage.setItem("test", "testValue");
// localStorage.setItem("test2", "testValue");

// console.log(localStorage.getItem("test"));

// localStorage.removeItem("test");

const inputEl = document.querySelector("#textInput");
const h2El = document.querySelector("h2");
const saveButton = document.querySelector("#submit");

if (localStorage.getItem("heading")) {
  inputEl.value = localStorage.getItem("heading");
  h2El.textContent = localStorage.getItem("heading");
}

document.addEventListener("keyup", () => {
  h2El.textContent = inputEl.value;
});

saveButton.addEventListener("click", () => {
  localStorage.setItem("heading", inputEl.value);
});
