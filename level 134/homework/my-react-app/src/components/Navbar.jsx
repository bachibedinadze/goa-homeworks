import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Page from "./Page";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: "20px",
      background: theme === "light" ? "#eee" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2>Navbar (Theme: {theme})</h2>
      <Page />
    </div>
  );
}

export default Navbar;