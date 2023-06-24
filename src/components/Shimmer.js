
const Shimmer = () =>{
    return(
        <>
        <div className="ResturantList flex flex-wrap m-10">
            {Array(10).fill("").map((index)=>{
                return(
                    <div className="shimmer-card w-[200] h-[200] bg-green-50 m-2" key={Math.random()}></div>
                )
            })}
        </div>
        </>
    )
}
export default Shimmer