import { Component } from "react";

class UserClass extends Component{
    constructor(props){
        console.log("from Constructor");
        super(props);
        this.state = {
            userInfo : {
                name: this.props.name,
                location : this.props.location
            }       
        };
    }

    async componentDidMount(){
        var userdetails = await fetch("https://api.github.com/users/bhuvanrajr");
        var jsonUserDetails = await userdetails.json();
        this.setState(
            {
                userInfo: jsonUserDetails
            }
        )

    }

    componentDidUpdate(){
        console.log("from Component Did Update");
    }

    componentWillUnmount(){
        console.log("from UnMount");
    }
    render(){
        const {name, location} = this.state.userInfo;
        console.log("from render");
        return(
            <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
            <h3>Contact : 9008957372</h3>
        </div>
        );
    }
}
export default UserClass;