import {MockRestDetails} from "../Utils/MockRestDetails";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuDetailsAPI } from "../Utils/Constants";

const RestaurantDetails = ()=>{
    const {restId} = useParams();
    const [resultData, setResultData] = useState();
    const [data, setData] = useState(MockRestDetails);

    useEffect(()=>{getData()},[]);

    console.log(MenuDetailsAPI);

    const getData = async ()=>{
        const d = await fetch(MenuDetailsAPI + restId);
        const result = await d.json();
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