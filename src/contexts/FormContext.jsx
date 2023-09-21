import { createContext, useState } from "react";
import useApiData from "../hooks/useApiData";

export const FormContext = createContext();

export function FormContextProvider({children}) {
    const [donghuas] = useApiData("donghuas");
    const [donghuaData, setDonghuaData] = useState({
        title: "",
        status: "",
        release: "",
        age: "",
        genres: "",
        sinopse: "",
        poster: "",
        banner: "",
    });
    const [donghuaTrailers, setDonghuaTrailers] = useState([]);


    function handleInputChange(event) {
        const {name, value} = event.target;

        setDonghuaData({
            ...donghuaData,
            [name]: value
        })

        // Atualiza o estado do input age que só pode aceitar números
        if(name === "age") {
            setDonghuaData({
                ...donghuaData,
                age: value.replace(/[^\d]/g, "")
            })
        }
    }


    function handleInputTrailersChange(event, index) {
        const {name, value} = event.target;
        const updateTrailers = [...donghuaTrailers];

        updateTrailers[index] = {
            ...updateTrailers[index],
            [name]: value
        }

        setDonghuaTrailers(updateTrailers)
    }

    return (
        <FormContext.Provider value={{
            donghuas, 
            donghuaData,
            donghuaTrailers,
            setDonghuaTrailers, 
            setDonghuaData,
            handleInputChange,
            handleInputTrailersChange
        }}>
            {children}
        </FormContext.Provider>
    )
}