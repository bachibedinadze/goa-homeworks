import React from "react";

function Hello({ name }) {
  return <div className="text-xl">Hello, {name}</div>;
}

function HelloButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-2xl shadow bg-gray-100 hover:bg-gray-200"
    >
      Click Me
    </button>
  );
}

export default function App() {
  const someFunction = () => {
    alert("Button clicked!");
  };

  return (
    <div className="p-6 space-y-4">
      <Hello name="Alice" />
      <HelloButton onClick={someFunction} />
    </div>
  );
}