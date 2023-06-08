// import React from "react";
// import  ReactDOM  from "react-dom/client";
// const heading1 = React.createElement("h1",{
//     id : "h1tag",
//     key : "heading1"
// },"Heading1")
// const heading2 = React.createElement("h2",{
//     id : "h2tag",
//     key : "heading2"
// },"Heading23")
// const div1 = React.createElement("div",{
//     id : "container",
// },[heading1,heading2])
// const jsxHeading = <h1>Snehil Don</h1>
// const HeaderComponent = () =>{
//     return (
//         <div>
//         {jsxHeading}
//         <h1>h1 tag</h1>
//         <h2>h2 tag</h2>
//         </div>
//         );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"))
// // root.render(jsxHeading) 
// root.render(<HeaderComponent/>) 
// // HeaderComponent


//////////////////////////////////////////////////////////////
import React from 'react'
import ReactDOM  from 'react-dom/client'

const title =(
    <a href="/">
    <img
      className = 'logo'
      src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
      alt = "Food Villa"
    />
    </a>
)

const resturantList = [
    {
        name : "abc",
        hotel : "abc"
    },
    {
        name : "abc",
        hotel : "abc"
    },
    {
        name : "abc",
        hotel : "abc"
    },
    {
        name : "abc",
        hotel : "abc"
    },
    {
        name : "abc",
        hotel : "abc"
    },
    {
        name : "abc",
        hotel : "abc"
    },
]
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
const Body = () =>{
    return (
        <div className="ResturantList">
        {resturantList.map((item)=>{
            return(
              <ResturantCard {...item}/>
            //   <ResturantCard item={item}/>
            )
        })}
        
        </div>
    );
}

const Fotter = () =>{
    return <h4>{"Footer"}</h4>;
}

const Header = () =>{
    return(
        <div className='header'>
        {title}
        <div className='nav-item'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <>
          <Header/>
          <Body/>
          <Fotter/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)