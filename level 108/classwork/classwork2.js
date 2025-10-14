const apiUrl = "https://fakestoreapi.com/products";

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