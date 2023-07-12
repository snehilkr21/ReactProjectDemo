import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer"
import { useDispatch } from "react-redux"
import {addItem} from "../utils/cartSlice"
const ResturantMenu = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    
    const [menu,aboutResturant]= useRestaurant(id)

    if(menu?.length==0 ||Object?.value?.length ==0 ){
        return <Shimmer/>
    }

    const addFoodItem = (item) =>{
           dispatch(addItem(item))
    }
    return (
        <div className="flex">
            <div className="m-2 p-5">
            <h1>Resturant id - {id}</h1>
            <br/>
            <h2>Resturant Name - {aboutResturant?.name}</h2>
            <br/>
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${aboutResturant?.cloudinaryImageId}`}/>
            <br/>
            <h3>Location - {aboutResturant?.areaName}</h3>
            <br/>
            <h5>Rating - {aboutResturant?.avgRating +" stars"}</h5>
            <br/>
            </div>
            <div className="p-5 ">
                {
                    menu?.map((item,index)=>{
                        console.log("item22",item)
                        return(
                            <div key={`${item?.card?.info?.name}${index}`} className='card w-[400px] h-[130px] p-2 m-2 shadow-md'>
                               <div> {item?.card?.info?.name}</div>
                               <div className="">Price - {item?.card?.info?.price/100}
                                <button className="p-2 m-2 bg-green-100" onClick={()=>{addFoodItem(item)}}>Add</button>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ResturantMenu