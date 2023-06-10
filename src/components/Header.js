const Title =() =>{
    return(
        <a href="/">
            <img
            className = 'logo'
            src = "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
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
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

export default Header