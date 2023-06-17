import React,{ useEffect } from "react";

function Profile (){
    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);
    return(
         <h1>
         Profile Section
         </h1>
    )
}
export default Profile