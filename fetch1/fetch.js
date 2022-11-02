async function fetchData() {
  const page = Math.floor(Math.random() * 33) + 1;
  const result = await fetch(`https://picsum.photos/v2/list?page=${page}`);
  return await result.json();
}
