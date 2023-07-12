import UserContext from "../utils/UserContext"
import {useContext} from "react"
const ResturantCard = ({name,cuisines,cloudinaryImageId}) =>{
    const {user}=useContext(UserContext)
    // const ResturantCard = ({item}) =>{
    //     const {name, hotel} = item
    // if we want to use 89 no line and we want to destructure them then use 71,72 no line, it is easy way
    console.log("8888",user)
        return(
            <div className='card w-[200px] h-[260px] p-2 m-2 shadow-md'>
               <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
               <h2 className="font-bold">{name}</h2>
               <h3>{cuisines.join(", ")}</h3>
               {/* <h5>{user.name}</h5> */}
            </div>
        )
    }
export default ResturantCard