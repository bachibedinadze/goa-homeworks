fetch('https://goa-api.vercel.app/your-desired-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok, status: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("GOA API data:", data);
  })
  .catch(error => {
    console.error("Fetch error (GOA):", error);
  });