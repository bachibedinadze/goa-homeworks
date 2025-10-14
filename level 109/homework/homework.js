// 1) Movies API Example (Async/Await)

// Using a free movies API (The Movie Database - TMDb)
const TMDB_API_KEY = "1c4f8e6a2be2cf89a9fa8fefc4a0c12f"; // example public key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

async function fetchMovies() {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const data = await response.json();
    const movies = data.results;

    const container = document.getElementById("movies-container");
    container.innerHTML = "";

    for (const movie of movies.slice(0, 10)) {
      const div = document.createElement("div");
      div.className = "movie-card";
      div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.vote_average}</p>
        <p>${movie.release_date}</p>
      `;
      container.appendChild(div);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// 2) JSONPlaceholder Example (Async/Await)

async function fetchJsonPlaceholder() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Failed to fetch JSONPlaceholder data");
    }

    const data = await response.json();
    console.log("JSONPlaceholder data:", data);
  } catch (error) {
    console.error("Error fetching JSONPlaceholder:", error);
  }
}

// Run both functions
window.addEventListener("DOMContentLoaded", async () => {
  await fetchMovies();
  await fetchJsonPlaceholder();
});