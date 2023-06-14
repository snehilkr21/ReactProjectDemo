
const Shimmer = () =>{
    return(
        <>
        <div className="ResturantList">
            {Array(10).fill("").map((index)=>{
                return(
                    <div className="shimmer-card" key={Math.random()}></div>
                )
            })}
        </div>
        </>
    )
}
export default Shimmer