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
      console.log("sffew",json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
      setAllResturantList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredResturant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    }
    function searchFilter(searchInput,resturantList){
      let temp= resturantList.filter((data)=>{
         return data?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
      })
      return temp
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
            <div className="search-container p-5 bg-pink-50 m-4">
                <input type="text" 
                  placeholder="Search" 
                  className="search-input hover:bg-green-50 m-2 p-2"  
                  value={searchInput} 
                  onChange={(e)=>setSearchInput(e.target.value)}
                />
                <button className="search-btn p-2 m-2 bg-purple-600 text-white rounded-lg"  data-testid="search-btn" onClick={()=>{
                    let data = searchFilter(searchInput,allResturantList)
                    setFilteredResturant(data)
                    
                }
                }
                >Search</button>
            </div>
            { filteredResturant?.length !==0 ? 
            <div className="ResturantList flex flex-wrap px-[50px]" data-testid="rest-list">
            {filteredResturant.map((item,index)=>{
                return(
                  <Link to={`/resturant/${item.info.id}`} key={`${item.info.name}+${index}`}>
                   <ResturantCard {...item.info} />
                  </Link>
                  
                )
            })}
            </div>
            : <h1 className="flex item-center justify-center">No restaurants found</h1>}
            
            </>
        );
    }
export default Body
    
    
    