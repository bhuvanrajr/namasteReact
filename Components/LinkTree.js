import { useState } from "react";
import { Link } from "react-router-dom";

const LinkTree = () =>{
    const[loginName, setLoginName] = useState("Login");

    const LoginNameHandler =()=>{
        if(loginName ==="Login"){
            setLoginName("Logout");
        }
        else
        {
            setLoginName("Login");
        }
    };

    return(
            <div className="link-tree">
                <ul >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button onClick={()=>{LoginNameHandler()}}>
                            {loginName}
                        </button>
                    </li>
                </ul>
            </div>
    );
}

export default LinkTree;