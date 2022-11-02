const outputEl = document.querySelector(".output");
const array = ["test"];
outputEl.textContent = array;

document.querySelector(".button1").addEventListener("click", () => {
  array.pop();
  outputEl.textContent = array;
});

document.querySelector(".button2").addEventListener("click", () => {
  array.push("labas");
  outputEl.textContent = array;
});
document.querySelector(".button3").addEventListener("click", () => {
  array.shift();
  outputEl.textContent = array;
});
document.querySelector(".button4").addEventListener("click", () => {
  array.unshift("Javascript");
  outputEl.textContent = array;
});
