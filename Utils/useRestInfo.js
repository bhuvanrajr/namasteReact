import { MenuDetailsAPI } from "./Constants";
import { useEffect, useState } from "react";

const useRestInfo = async (restId) =>{
    const [restInfo, setRestInfo] = useState();

    useEffect(()=>{getData()},[]);

    const getData = async ()=>{
            const d = await fetch(MenuDetailsAPI + restId);
            var result = await d.json();
            setRestInfo(result);
    }
    return restInfo;
}

export default useRestInfo;