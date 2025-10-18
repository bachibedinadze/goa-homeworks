// 1) FETCH USER DATA


async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log("=== User Names ===");
    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}


// 2) HANDLE API ERRORS


async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Custom Error: Failed to fetch data. Please check the API endpoint or your connection.");
  }
}


// 3) RETRY ON FAILURE


async function fetchWithRetry(url, retries = 3) {
  for (let i = 1; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log("Data fetched successfully:", data);
      return data;
    } catch (error) {
      console.warn(`Attempt ${i} failed. Retrying...`);
      if (i === retries) {
        console.error("All retries failed. Could not fetch data.");
        throw error;
      }
    }
  }
}


// 4) SEQUENTIAL REQUESTS


async function fetchSequentialData() {
  try {
 
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();

 
    const authorId = posts[0].userId;

  
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`);
    const user = await userResponse.json();

    console.log(`Author of the first post: ${user.name}`);
  } catch (error) {
    console.error("Error during sequential requests:", error);
  }
}


// EXECUTE ALL FUNCTIONS


fetchUserData();
fetchWithErrorHandling();
fetchWithRetry('https://jsonplaceholder.typicode.com/posts');
fetchSequentialData();