import { useState, useEffect } from "react";

function AsyncExample() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data loaded successfully");
        }, 2000);
      });

      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Async Data:</h2>
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default AsyncExample;