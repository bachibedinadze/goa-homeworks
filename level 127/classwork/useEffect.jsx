import { useEffect } from "react";

function MyComponent() {

    const fetchData = async (apiLink) => {
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            console.log(data);
        }   catch (error) {
            console.error("შეცდომა მონაცემების წამოღებისას:", error);
        }
    };

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts");
}, []);

return (
    <div>
        <h1>My Component</h1>
    </div>
    );
}

export default MyComponent;