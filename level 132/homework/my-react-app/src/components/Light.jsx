import { useToggle } from "../hooks/useToggle";

export function Light() {
  const { value: isOn, toggle } = useToggle(false);

  return (
    <div>
      <h2>💡 Light is {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggle}>Toggle Light</button>
    </div>
  );
}