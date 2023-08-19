import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import connectAPI from "../services/MyAPI";

export default function useApiData() {
    const [banner, setBanner] = useState([]);
    const { pathname } = useLocation();
    
    useEffect(() => {
        const endpoit = getEndPoint(pathname);

        connectAPI(endpoit).then(json => {
            setBanner(json);
        })
        
    },[pathname]);

    return [banner]
}

function getEndPoint(pathname) {

    if (pathname === "/") {
        return "advertisements"

    } else {
        return "donghuas"
    }
}