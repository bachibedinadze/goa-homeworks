import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(true);
  const [isHappy, setIsHappy] = useState(false);

  const hobbies = ["Coding", "Gaming", "Reading", "Traveling"];

  return (
    <div className="p-4">
      <h1>{isHappy ?