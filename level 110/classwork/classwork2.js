async function getData() {
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    

    const data = await response.json();

 
    console.log("მიღებული ინფორმაცია:", data);

  } catch (error) {
 
    console.error("შეცდომა მოხდა:", error);
  }
}

getData();