import { useEffect, useState } from "react";
import { resturantList } from "../config";
import ResturantCard from "./ResturantCard.js"
const Body = () =>{
    const [resturant,setResturant] = useState(resturantList)
    const [searchInput,setSearchInput] = useState("")
    useEffect(()=>{
     if(searchInput?.length==0){
        setResturant(resturantList)
     }
    },[searchInput])
    function searchFilter(searchInput,resturantList){
      return resturantList.filter((data)=>{
        return data?.name?.includes(searchInput)
      })
    }
        return (
            <>
            <div className="search-container">
                <input type="text" 
                  placeholder="Search" 
                  className="search-input"  
                  value={searchInput} 
                  onChange={(e)=>setSearchInput(e.target.value)}
                />
                <button className="search-btn" onClick={()=>{
                    let data = searchFilter(searchInput,resturantList)
                    setResturant(data)
                }
                }
                >Search</button>
            </div>
            <div className="ResturantList">
            {resturant.map((item)=>{
                return(
                  <ResturantCard {...item} key={item.name}/>
                )
            })}
            
            </div>
            </>
        );
    }
export default Body
    
    
    