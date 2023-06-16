import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"
const About = () =>{
    return(
        <>
        About
        <Outlet/>
        <ProfileClass name={"Snehil Raj"}/>
        </>
    )
}
export default About