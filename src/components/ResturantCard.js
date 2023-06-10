const ResturantCard = ({name,hotel}) =>{
    // const ResturantCard = ({item}) =>{
    //     const {name, hotel} = item
    // if we want to use 89 no line and we want to destructure them then use 71,72 no line, it is easy way
        return(
            <div className='card'>
               <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/drgphrpjbnqcwjsxaiod" />
               <h2>{name}</h2>
               <h3>{hotel}</h3>
               
            </div>
        )
    }
export default ResturantCard