import { useToggle } from "../hooks/useToggle";

export function Modal() {
  const { value: isOpen, setTrue, setFalse } = useToggle(false);

  return (
    <div>
      <button onClick={setTrue}>Open Modal</button>

      {isOpen && (
        <div style={{ border: "1px solid black", padding: 20, marginTop: 10 }}>
          <p>📦 This is modal window</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </div>
  );
}