document.querySelector(".add").addEventListener("click", createJoke);
document.querySelector(".clear").addEventListener("click", clearJokes);

async function getJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random/");
  const data = await response.json();
  return data;
}

async function createJoke() {
  const joke = await getJoke();
  console.log(joke);
  const jokeCardEl = document.createElement("div");
  // kai kurie ID prasideda skaiciais, o kadangi HTML'e ID negali prasideti skaiciumi, pridedu raide priekyje.
  jokeCardEl.id = "a" + joke.id;
  jokeCardEl.style.padding = "10px";
  jokeCardEl.style.margin = "10px";

  const updatedEl = document.createElement("p");
  updatedEl.textContent = joke.created_at;
  jokeCardEl.append(updatedEl);

  const linkEl = document.createElement("a");
  linkEl.href = joke.url;
  linkEl.textContent = "Link to joke";
  jokeCardEl.append(linkEl);

  const jokeValueEl = document.createElement("p");
  jokeValueEl.textContent = joke.value;
  jokeCardEl.append(jokeValueEl);

  jokeCardEl.append(createCloseButton(joke.id));
  jokeCardEl.append(createRandomBackgroundButton(joke.id));

  document.querySelector(".cards").append(jokeCardEl);
  document.querySelector(".jokeCount").textContent++;
}

function createCloseButton(id) {
  const closeButton = document.createElement("button");
  closeButton.textContent = "CLOSE";
  closeButton.addEventListener("click", () => {
    document.querySelector(`#a${id}`).remove();
    document.querySelector(".jokeCount").textContent--;
  });
  return closeButton;
}

function createRandomBackgroundButton(id) {
  const randomColorButton = document.createElement("button");
  randomColorButton.textContent = "RANDOM CARD COLOR";
  randomColorButton.addEventListener("click", () => {
    document.querySelector(
      `#a${id}`
    ).style.background = `linear-gradient(${getRandomHexColor()}, ${getRandomHexColor()})`;
  });
  return randomColorButton;
}

function clearJokes() {
  document.querySelector(".cards").innerHTML = "";
  document.querySelector(".jokeCount").textContent = 0;
}

function getRandomHexColor() {
  let hexColorValue = "#";
  const hexValues = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    hexColorValue += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  return hexColorValue;
}
