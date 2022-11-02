const ballEl = document.querySelector("#ball");

document.addEventListener("keydown", () => {
  ballEl.style.transition = "bottom 2s";
  ballEl.style.bottom = "300px";
});

document.addEventListener("keyup", () => {
  ballEl.style.transition = "bottom 5s";
  ballEl.style.bottom = "40px";
});
