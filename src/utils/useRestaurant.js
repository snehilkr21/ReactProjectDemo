import { useState,useEffect } from "react";
const useRestaurant = (id) =>{
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
    return [menu,aboutResturant]
}
export default useRestaurant