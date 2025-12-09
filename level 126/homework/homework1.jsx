import { useState, useEffect } from "react";

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <h2>Window Width</h2>
      <p>{width}px</p>
    </div>
  );
}

export default WindowWidthTracker;