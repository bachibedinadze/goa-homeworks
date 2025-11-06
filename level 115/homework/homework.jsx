import React from "react";
import { motion } from "framer-motion";

export default function ExampleComponent() {
  const name = "React";
  const imgUrl = "https://react.dev/images/brand/react-logo.png";

  const handleClick = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* self-closing tag */}
      <motion.img
        src={imgUrl}
        alt={`${name} logo`}
        width={100}
        className="mb-4 drop-shadow-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* ტექსტად JS კოდის ჩაწერა */}
      <h2 className="text-2xl font-bold text-gray-700 mb-3">
        Welcome to {name.toUpperCase()}!
      </h2>

      {/* ატრიბუტად JS კოდის ჩაწერა + მოვლენის მსმენელი */}
      <button
        className={`px-4 py-2 rounded-2xl text-white font-medium shadow-md transition ${
          name === "React"
            ? "bg-sky-500 hover:bg-sky-600"
            : "bg-gray-400 hover:bg-gray-500"
        }`}
        onClick={handleClick}
      >
        Click me to greet {name}
      </button>
    </div>
  );
}