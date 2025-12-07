import { useState } from "react";

function Colors() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "white",
    "brown",
  ];

  const [arrIndex, setArrIndex] = useState(null);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setArrIndex(randomIndex);
  };

  return (
    <div>
      <p>
        {arrIndex !== null ? colors[arrIndex] : "Click the button to get a color"}
      </p>

      <button onClick={getRandomColor}>Get Random Color</button>
    </div>
  );
}

export default Colors;