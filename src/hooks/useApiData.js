import {useState, useEffect} from "react";
import connectAPI from "../services/MyAPI";

export default function useApiData(endpoint) {
    const [data, setData] = useState([]);

    const fetchData = () => {
        connectAPI(endpoint).then(json => {
            setData(json);
        })
    }

    useEffect(() => {
        fetchData();
        
    }, [endpoint]);

    return [data]
}
