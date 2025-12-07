import { useState } from "react";

const allNamesInitial = [
  "biba",
  "datuna sisauri",
  "saba sabanshvili",
  "soso rtveliashvili",
  "david",
  "bachi bediandze",
  "giorgi jioshvili",
  "mate chubinidze",
];

function App() {
  const [selectedNames, setSelectedNames] = useState([
    "biba",
    "datuna sisauri",
    "saba sabanshvili",
    "soso rtveliashvili",
    "david",
    "bachi bediandze",
  ]);

  const [allNames, setAllNames] = useState(
    allNamesInitial.filter((name) => !selectedNames.includes(name))
  );

  const removeName = (name) => {
    setSelectedNames(selectedNames.filter((n) => n !== name));
    setAllNames([...allNames, name]);
  };

  const addName = (name) => {
    setAllNames(allNames.filter((n) => n !== name));
    setSelectedNames([...selectedNames, name]);
  };

  const reset = () => {
    setSelectedNames([]);
    setAllNames(allNamesInitial);
  };

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "#eee",
        padding: "40px",
        fontFamily: "serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Selected names</h1>

      <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
        {selectedNames.map((name) => (
          <li key={name} style={{ marginBottom: "10px" }}>
            {name}
            <button
              onClick={() => removeName(name)}
              style={{
                marginLeft: "10px",
                padding: "4px 8px",
                backgroundColor: "#666",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              remove name
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={reset}
        style={{
          marginTop: "15px",
          padding: "6px 12px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#777",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

      <hr style={{ margin: "30px 0", borderColor: "#888" }} />

      <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
        {allNames.map((name) => (
          <li key={name} style={{ marginBottom: "10px" }}>
            {name}
            <button
              onClick={() => addName(name)}
              style={{
                marginLeft: "10px",
                padding: "4px 8px",
                backgroundColor: "#666",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              add name
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;