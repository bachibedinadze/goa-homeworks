import { useInfo } from "./hooks/useInfo";

export default function App() {
  const { count, increase, decrease, reset } = useInfo();

  return (
    <div style={{ padding: 20 }}>
      <p>{count}</p>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: 8 }}>
        Decrease
      </button>
      <button onClick={reset} style={{ marginLeft: 8 }}>
        Reset
      </button>
    </div>
  );
}