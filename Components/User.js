import { useState } from "react";
const User = ({name, location})=>{
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
            <h3>Contact : 9008957372</h3>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <h4>My Count = {count}</h4>
        </div>
    );
}

export default User;