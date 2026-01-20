import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Info = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        minHeight: "100vh",
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div style={styles}>
            <h1>სათაური 1</h1>
            <p>ეს არის პირველი პარაგრაფი</p>

            <h2>სათაური 2</h2>
            <p>ეს არის მეორე პარაგრაფი</p>

            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </div>
    );
};

export default Info;