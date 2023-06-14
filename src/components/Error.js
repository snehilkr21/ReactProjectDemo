import {useRouteError} from "react-router-dom"
import Logo from "../assets/img/opps.jpeg"
const Error = () =>{
    const err= useRouteError();
    // const {status, statusText} = err
    return(
        <>
        <div className="error">
            <img src ={Logo} />
            <h1>Something Went Wrong</h1>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
        </>
    )
}
export default  Error;