import { useState } from "react";

function SimpleState() {
  const [message, setMessage] = useState("Hello, React!");

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default SimpleState;