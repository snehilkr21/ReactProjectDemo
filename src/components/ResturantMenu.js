import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer"

const ResturantMenu = () =>{
    const {id} = useParams()
    
    const [menu,aboutResturant]= useRestaurant(id)

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