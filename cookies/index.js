document.cookie =
  "userName=Rimantas; expires=" + new Date("2022-10-26").toUTCString();

document.cookie =
  "language=Javascript; expires=" + new Date(2023, 9, 27).toUTCString();

document.cookie = "course=Python";

console.log(document.cookie);
