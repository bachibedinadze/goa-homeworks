const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function getData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();