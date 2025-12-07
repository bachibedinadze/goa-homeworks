import { useState } from "react";

/* Paragraph კომპონენტი props-ით */
function Paragraph({ count }) {
  return <p>Count: {count}</p>;
}

/* Div კომპონენტი state-ით */
function Div() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {/* Paragraph კომპონენტს გადაეცემა count */}
      <Paragraph count={count} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Div />
    </div>
  );
}

export default App;