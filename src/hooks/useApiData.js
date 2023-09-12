import {useState, useEffect} from "react";
import connectAPI from "../services/MyAPI";

export default function useApiData(endpoint) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        connectAPI(endpoint).then(json => {
            setData(json);
        })
        
    }, []);

    return [data]
}
