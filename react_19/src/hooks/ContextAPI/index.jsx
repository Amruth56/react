import { createContext } from "react";

export const BioContext = createContext(); 

export const BioProvider = ({children}) => {
    const details  = {
        name: "John",
        age: 30
    }
    return (
        <BioContext.Provider value={details}>
            {/* Child components go here */}
            {children}
        </BioContext.Provider>
    )
}