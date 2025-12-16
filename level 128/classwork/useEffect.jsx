import { useState, useEffect } from "react";

function App() {

   const [data, setData] = useState(null);
   const [apiUrl, setApiUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
        
    const fetchData = async (apiLink) => {
        try {
            const response = await fetch(apiLink);
            const jsonData = await response.json();
            setData(jsonData);
        }   catch (error) {
        console.error("შეცდომა მონაცემების წამოღებისას:", error);
    }
};

useEffect(() => {
    fetchData(apiUrl);
    console.log("მიმდინარე data state:", data);
}, [apiUrl, data]);

return (
    <div>
        <h1>API მონაცემები</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>

        <button
        onclick={() =>
        setApiUrl("https://jsonplaceholder.typicode.com/posts/2");
        }
    >
        API ლინკის შეცვლა
        </button>
    </div>
    );
}

export default App;