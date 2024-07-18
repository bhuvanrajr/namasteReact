import { MenuDetailsAPI } from "./Constants";
import { useEffect } from "react";

const useRestInfo = (restId) =>{
    var restInfo = null;
    useEffect(()=>{getData()},[]);

    console.log(MenuDetailsAPI);

    const getData = async ()=>{
        const d = await fetch(MenuDetailsAPI + restId);
        restInfo = await d.json();
    }
    return restInfo;
}

export default useRestInfo;