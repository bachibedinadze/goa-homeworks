function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "fit-content"
    }}>
      {children}
    </div>
  );
}

export default Card;