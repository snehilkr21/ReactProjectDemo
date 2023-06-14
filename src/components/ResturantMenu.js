import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer"
const ResturantMenu = () =>{
    const {id} = useParams()
    const [menu,setMenu] = useState([])
    const [aboutResturant,setAboutResturant] = useState({})
    useEffect(()=>{
        fetchResturantMenuItem()
    },[]);
    
    async function fetchResturantMenuItem() {
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${id}&submitAction=ENTER`)
        let json = await data.json()
        console.log(json)
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setAboutResturant(json?.data?.cards[0]?.card?.card?.info)
    }
    if(menu?.length==0 ||Object?.value?.length ==0 ){
        return <Shimmer/>
    }
    return (
        <div>
            <div>
            <h1>Resturant id : {id}</h1>
            <h2>{aboutResturant?.name}</h2>
            <h3>{aboutResturant?.areaName}</h3>
            <h5>{aboutResturant?.avgRating +" stars"}</h5>
            </div>
            <div>
                {
                    menu?.map((item,index)=>{
                        return(
                            <div key={`${item?.card?.info?.name}${index}`}>
                                {item?.card?.info?.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ResturantMenu