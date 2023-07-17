import { useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const Card = () =>{
    const dispatch = useDispatch()
     const item = useSelector(store => store.cart.item)
     console.log("item12",item)
     
    return(
      <>
      <h1 className="font-bold m-2 p-2 flex items-center justify-center">No of items - {item?.length}</h1>
      <div className="flex items-center justify-center">
      {item?.length>1 && <button className="bg-green-100 " onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>}
      </div>
      
        <div className="p-10 flex flex-wrap ">
                {
                    item?.map((item,index)=>{
                        console.log("item22",item)
                        return(
                            <div key={`${item?.card?.info?.name}${index}`} className='card w-[300px] h-[180px] p-2 m-2 shadow-md'>
                                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.card?.info?.imageId}`} width="100" height="100"/>
                               <div> {item?.card?.info?.name}</div>
                               <div className="">Price - {item?.card?.info?.price/100}
                                <button className="p-2 m-2 bg-green-100" onClick={()=>{addFoodItem(item)}}>Add</button>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
      </>
    )
}

export default Card