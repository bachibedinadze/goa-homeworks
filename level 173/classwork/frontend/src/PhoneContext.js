import { createContext, useEffect, useState } from "react";

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
    const [phones, setphones] = useState([]);

    const getPhones = async () => {
        try {
            const response = await fetch("http://localhost:500/api/phones");
            const data = await response.json();

            setphones(data);
        }   catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPhones();
    }, []);

    return (
    <PhonesContext.Provider value= {{ phones, getPhones }}>
        {children}
    </PhonesContext.Provider>
    );
};