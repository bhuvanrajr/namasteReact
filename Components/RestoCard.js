import { CloudinaryImageUrl } from "../Utils/Constants";
import { UserContext } from "../Utils/UserContext";
import { useContext } from "react";
const RestoCard = (props) =>{
    const { info }= props.restoData;
    const userName = useContext(UserContext);
    return (
        <div className="w-60 h-96 border border-black shadow-xl rounded-lg m-2">
            <img className="w-60 h-60 rounded-lg" src={ CloudinaryImageUrl + info.cloudinaryImageId } />
            <h4 className="text-sm font-bold dark:text-black">{info.name}</h4>
            <h5 className="text-sm dark:text-black">{info.cuisines.join(", ")}</h5>
            <h5 className="text-sm dark:text-black">{info.avgRatingString}</h5>
            <h5 className="text-sm dark:text-black">{info.sla.slaString}</h5>
            <h5 className="text-sm dark:text-black">{userName}</h5>
        </div>
    )
}

export default RestoCard;