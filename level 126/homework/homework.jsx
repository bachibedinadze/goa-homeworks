import { useState, useEffect } from "react";

function DocumentClickLogger() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prev) => prev + 1);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div>
      <h2>Document Click Count</h2>
      <p>{clickCount}</p>
    </div>
  );
}

export default DocumentClickLogger;