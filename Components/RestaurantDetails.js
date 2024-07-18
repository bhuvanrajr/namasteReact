import {MockRestDetails} from "../Utils/MockRestDetails";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestInfo from "../Utils/useRestInfo"


const RestaurantDetails = ()=>{
    const {restId} = useParams();
    const [resultData, setResultData] = useState();
    const [data, setData] = useState(MockRestDetails);

    var result = useRestInfo(restId);
    if(result != null){
        setResultData(result);
        setData(result);
    }

const {avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, feeDetails } = data?.data?.cards[2]?.card?.card?.info;

const restName = data?.data?.cards[0]?.card?.card?.text;

    return (
        <div className="restaurantDetails">
            <h1 className="restName">{restName}</h1>
            <div className="restInfo">
                <div>
                    <h4> ★ {avgRating + " "} 
                    ({totalRatingsString}) 
                    . 
                    {" " + costForTwoMessage}
                    </h4>
                    <h5 className="cusines">
                    {cuisines.join(', ')}
                    </h5>
                    <h5>
                        Outlet: {areaName}
                    </h5>
                    <h5>
                        {sla.minDeliveryTime}
                        -
                        {sla.maxDeliveryTime} mins
                    </h5>
                    <h5>
                        {feeDetails.message}
                    </h5>
                </div>
            </div>
            <div>
                <MenuCard  menu = {resultData}/>
            </div>
        </div>
    )
}

export default  RestaurantDetails;