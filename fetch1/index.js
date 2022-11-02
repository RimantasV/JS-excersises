//promise

// fetch("https://picsum.photos/v2/list?page=1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async/await

async function fetchData() {
  const page = Math.floor(Math.random() * 33) + 1;
  const result = await fetch(`https://picsum.photos/v2/list?page=${page}`);
  const data = await result.json();

  return data;
}

async function createLayout() {
  const photoArray = await fetchData();

  photoArray.forEach((photoObject) => {
    const imgEl = document.createElement("img");
    imgEl.src = photoObject.download_url;
    // styles can be added in JS like below, or in CSS
    // imgEl.style.width = "300px";
    document.body.append(imgEl);
  });
}

createLayout();
