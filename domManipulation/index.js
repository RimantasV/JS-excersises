document.querySelector(".button1").addEventListener("click", () => {
  document.querySelector("p:nth-child(1)").textContent = "changed text";
});

document.querySelector(".button2").addEventListener("click", () => {
  document.querySelector("p:nth-child(2)").textContent += "added text";
});

document.querySelector(".button3").addEventListener("click", () => {
  document.querySelector("p:nth-child(3)").style.color = "red";
});

document.querySelector(".button4").addEventListener("click", () => {
  document.querySelector("p:nth-child(4)").textContent = "New text";
});

const figuros = document.querySelectorAll(".figura");

for (let i = 0; i < figuros.length; i++) {
  figuros[i].addEventListener("click", (e) => e.target.remove());
}
