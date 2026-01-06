import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Test() {
    const value = useContext(MyContext);

    return <p>{value}</p>;
}

export default Test;