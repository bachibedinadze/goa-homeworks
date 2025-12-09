import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 500);
        
        return () => {
            clearInterval(intervalid);
        }; 
    }, []);

    return (
        <div>
            <p>Count მნიშვნელობა: {count}</p>
        </div>
    );
}

export default Counter