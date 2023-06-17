import { useState, useEffect } from "react";
const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true)
    useEffect(()=>{
        const handleOnline = () => {
            console.log("abc")
            setIsOnline(true);
          };
      
          const handleOffline = () => {
            console.log("def")
            setIsOnline(false);
          };
      
          window.addEventListener("online", handleOnline);
          window.addEventListener("offline", handleOffline);
      
          return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
          };
    },[])
    return isOnline
}
export default useOnline