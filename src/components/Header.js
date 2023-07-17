import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Title =() =>{
    return(
        <a href="/">
            <img
            data-testid="logo"
            className ="h-28 pl-3"
            // src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
            src={Logo}
            alt = "Food Villa"
            />
        </a>
    )
}
    
const Header = () =>{
    const cartItems = useSelector(store => store.cart.item)
    return(
        <div className='flex justify-between bg-pink-50 shadow-lg'>
        <Title />
        <div className='nav-item pr-4'>
            <ul className="flex py-10">
                <li className="px-2"> <Link to="/">Home</Link> </li>
                <li className="px-2"> <Link to="/about">About</Link> </li>
                <li className="px-2"> <Link to="/contact">Contact Us</Link> </li>
                <li className="px-2" > <Link to="/cart" data-testid="cart">Cart {cartItems?.length}</Link> </li>
                {/* <li className="px-2"> <Link to="/instamart">Insta-Mart</Link> </li> */}
            </ul>
        </div>
        </div>
    )
}

export default Header