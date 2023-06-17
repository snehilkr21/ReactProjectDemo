import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard.js"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
const Body = () =>{
    const [allResturantList,setAllResturantList] =useState([])
    const [filteredResturant,setFilteredResturant] = useState([])
    const [searchInput,setSearchInput] = useState("")
    useEffect(()=>{
      ResturantList()
    },[])
    
    async function ResturantList(){
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING")
      let json = await data.json()
      console.log("sffew",json)
      setAllResturantList(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards)
    }
    function searchFilter(searchInput,resturantList){
      return resturantList.filter((data)=>{
        return data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
      })
    }

    useEffect(()=>{
          if(searchInput?.length ==0 ){
            setFilteredResturant(allResturantList)
          }
    },[searchInput])
    
    let isOnline = useOnline();
    if(!isOnline){
           return <h1>🔴 Please check your internet connection</h1>;
    }
    //early return
    if(!allResturantList) return null;

    return (allResturantList?.length === 0) ? <Shimmer/> :(
            <>
            <div className="search-container">
                <input type="text" 
                  placeholder="Search" 
                  className="search-input"  
                  value={searchInput} 
                  onChange={(e)=>setSearchInput(e.target.value)}
                />
                <button className="search-btn" onClick={()=>{
                    let data = searchFilter(searchInput,allResturantList)
                    setFilteredResturant(data)
                }
                }
                >Search</button>
            </div>
            { filteredResturant?.length !==0 ? 
            <div className="ResturantList">
            {filteredResturant.map((item,index)=>{
                return(
                  <Link to={`/resturant/${item.data.id}`} key={`${item.data.name}+${index}`}>
                   <ResturantCard {...item.data} />
                  </Link>
                  
                )
            })}
            </div>
            : <h1>No restaurants found</h1>}
            
            </>
        );
    }
export default Body
    
    
    