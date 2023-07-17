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
import React,{lazy,Suspense, useState} from 'react'
import ReactDOM  from 'react-dom/client'
import Header from "./components/Header"
import Footer from './components/Footer'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import { createBrowserRouter , Outlet, RouterProvider, UNSAFE_RouteContext} from 'react-router-dom'
import ResturantMenu from './components/ResturantMenu'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer'
const Instamart = lazy(()=>import("./components/Instamart")) 
import userContext from './utils/UserContext'
import { Provider } from 'react-redux'
import Store from "./utils/store"
import Card from './components/Crat'
const AppLayout = () =>{
  const [userData,setUserData]=useState({
    name:"snehil",
    email:"xyz@gmail.com"
  })
    return(
        <Provider store={Store}>
        <userContext.Provider value={{user:userData,setUserData:setUserData}}>
          <Header/>
          <Outlet/>
          <Footer/>
          </userContext.Provider>
        </Provider>
    )
}

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />,
        children : [
          {
            path : "profile",
            element : <Profile />
          }
        ]
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/resturant/:id",
        element : <ResturantMenu />
      },
      {
        path : "/instamart",
        element : (<Suspense fallback={<Shimmer/>}>
                       <Instamart />
                    </Suspense>
                  )
      },
      {
        path : "/cart",
        element : <Card/>
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoute}/>)