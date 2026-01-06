import { createContext } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
    return (
        <MyContext.Provider value= "ეს ტექსტი მოდის Wrapper Provider-იდან">
            {children}
        </MyContext.Provider>
    );
}