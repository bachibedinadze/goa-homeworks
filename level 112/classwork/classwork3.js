export async function fetchData(apiUrl = "https://jsonplaceholder.typicode.com/todos/1") {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("API-დან მიღებული ინფორმაცია:", data);
  } catch (error) {
    console.error("შეცდომა ინფორმაციის მოტანისას:", error);
  }
}