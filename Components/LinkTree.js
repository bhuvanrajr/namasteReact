import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Utils/UserContext";
import { useSelector } from "react-redux";


const LinkTree = () =>{
    const [loginName, setLoginName] = useState("Login");
    const [isOnline, setIsOnline] = useState(true);
    const userName = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems.length + "from LinkTree");
    const LoginNameHandler =()=>{
        if(loginName ==="Login"){
            setLoginName("Logout");
        }
        else
        {
            setLoginName("Login");
        }
    };

    useEffect(()=>{
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', ()=> setIsOnline(false));
        return()=>{
            window.removeEventListener('online', null);
            window.removeEventListener('offline', null);
        }
    })

    return(
            <div>
                <ul className="flex">
                    <li className="p-2 hover:font-bold hover:text-orange-500 hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 hover:font-bold hover:text-orange-500 hover:underline">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-2 hover:font-bold hover:text-orange-500 hover:underline">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-2 hover:font-bold hover:text-orange-500 hover:underline">
                        <Link to="/cart">Cart({cartItems.length})</Link>
                    </li>
                    <li className="p-2 hover:font-bold hover:text-orange-500 hover:underline">
                        <button onClick={()=>{LoginNameHandler()}}>
                            {loginName}
                        </button>
                    </li>
                    <li>
                        {isOnline? 
                        <h4 className = "p-2 text-green-600">Online</h4> : 
                        <h4 className="p-2 text-red-600">Offline</h4>}
                    </li>
                    <li className="p-2 hover: hover:text-orange-500 ">
                            {userName}
                    </li>
                </ul>
            </div>
    );
}

export default LinkTree;