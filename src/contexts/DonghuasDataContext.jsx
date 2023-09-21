import { createContext } from "react";
import useApiData from "../hooks/useApiData";

export const DonghuasDataContext = createContext();

export function DonghuasDataProvider({ children }) {
    // Pegas os dados da API
    const [donghuas] = useApiData("donghuas");

    return (
        <DonghuasDataContext.Provider value={donghuas}>
            { children }
        </DonghuasDataContext.Provider>
    )
}