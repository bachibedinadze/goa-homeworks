import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleKeyDown = () => {
            setCount((prevCount) => prevCount +1);
        };
        
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }; 
    }, []);

    return (
        <div>
            <p>Count მნიშვნელობა: {count}</p>
        </div>
    );
}

export default Counter