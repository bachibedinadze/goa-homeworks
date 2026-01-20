import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h4>Content Area</h4>
      <p>Current Theme: {theme}</p>
      <ThemeButton />
    </div>
  );
}

export default Content;