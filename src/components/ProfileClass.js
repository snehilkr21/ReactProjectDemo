import React from 'react'
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name : "",
            location : "",
            avatar_url : ""
        }
    }
    async componentDidMount(){
        let data = await fetch("https://api.github.com/users/snehilkr21")
        let json = await data.json()
        console.log("1313",json)
        this.setState({
            name : json.login,
            location : "India",
            avatar_url : json.avatar_url
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.location}</h2>
                <img src={this.state.avatar_url} alt="image"/>
            </div>
        )
    }
}
export default Profile