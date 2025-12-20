import { useState } from "react";
import CounterPresentational from ". ./presentational/CounterPresentational";

const CounterContainer = () => {
    const [count, setCount] = usestate(0);
    
    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <CounterPresentational
        count={count}
        decrease={decrease}
        />
    );
};

export defualt CounterContainer;