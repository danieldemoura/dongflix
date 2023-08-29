import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import connectAPI from "../services/MyAPI";

export default function useApiData() {
    const [data, setData] = useState([]);
    const { pathname } = useLocation();
    
    useEffect(() => {
        const endpoit = getEndPoint(pathname);

        connectAPI(endpoit).then(json => {
            setData(json);
        })
        
    },[]);

    return [data]
}

function getEndPoint(pathname) {

    if (pathname === "/") {
        return "advertisements"

    } else {
        return "donghuas"
    }
}