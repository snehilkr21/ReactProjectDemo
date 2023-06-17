import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom"
const Title =() =>{
    return(
        <a href="/">
            <img
            className = 'logo'
            // src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
            src={Logo}
            alt = "Food Villa"
            />
        </a>
    )
}
    
const Header = () =>{
    return(
        <div className='header'>
        <Title />
        <div className='nav-item'>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact Us</Link> </li>
                <li> <Link to="/cart">Cart</Link> </li>
                <li> <Link to="/instamart">Insta-Mart</Link> </li>
            </ul>
        </div>
        </div>
    )
}

export default Header