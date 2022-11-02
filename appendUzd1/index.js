const inputEl = document.querySelector("#number");

inputEl.addEventListener("blur", (e) => {
  if (document.querySelector(".box")) {
    document.querySelector(".box").remove();
  }

  if (!isNaN(e.target.value) && e.target.value >= 0 && e.target.value <= 99) {
    const successBox = document.createElement("div");
    successBox.classList.add("box");
    successBox.append("Tai yra skaicius. taip 0 ir 99");
    successBox.style.padding = "5px";
    successBox.style.backgroundColor = "green";
    document.body.prepend(successBox);
  } else {
    const failBox = document.createElement("div");
    failBox.classList.add("box");
    failBox.append(`Ivedete ${e.target.value}`);
    failBox.style.padding = "5px";
    failBox.style.backgroundColor = "red";
    document.body.append(failBox);
  }
});
