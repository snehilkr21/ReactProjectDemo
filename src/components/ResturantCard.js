const ResturantCard = ({name,cuisines,cloudinaryImageId}) =>{
    // const ResturantCard = ({item}) =>{
    //     const {name, hotel} = item
    // if we want to use 89 no line and we want to destructure them then use 71,72 no line, it is easy way
        return(
            <div className='card w-[200px] h-[280px] p-2 m-2 shadow-md'>
               <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
               <h2 className="font-bold">{name}</h2>
               <h3>{cuisines.join(", ")}</h3>
               
            </div>
        )
    }
export default ResturantCard