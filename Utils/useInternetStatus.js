import { useEffect, useState } from "react"

const useInternetStatus = ()=>{
    const [isOffline, setIsOffline] = useState(false);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOffline(true);
        });
    }, []);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOffline(false);
        });
    }, [])
    return isOffline;
}

export default useInternetStatus