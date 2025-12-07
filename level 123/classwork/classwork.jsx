import { useState } from "react";

function Div() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "200px",
        cursor: "pointer",
      }}
    >
      <p>Clicks: {count}</p>
    </div>
  );
}

export default Div;