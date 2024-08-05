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
    const getData = async ()=>{
        const d = await fetch(MenuDetailsAPI + restId);
        const result = await d.json();
        setResultData(result);
        setData(result);
    }


    const {avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, feeDetails } = data?.data?.cards[2]?.card?.card?.info;

    const restName = data?.data?.cards[0]?.card?.card?.text;

    return (
        <div className="m-10">
            <h1 className="mx-20 text-2xl font-bold font-calibri">{restName}</h1>
            <div className="m-2 mx-20  border border-l-gray-400 rounded-2xl w-2/3 shadow-slate-800 shadow-2xl">
                <div>
                    <h4 className="px-2 m-1 font-semibold font-calibri"> 
                        <span className=" text-green-500">★ </span>{avgRating + " "} 
                    ({totalRatingsString}) 
                    . 
                    {" " + costForTwoMessage}
                    </h4>
                    <h5 className = "px-2 m-1 text-orange-600 underline font-semibold font-calibri">
                    {cuisines.join(', ')}
                    </h5>
                    <h5 className = "px-2 m-1">
                        <span className="font-semibold font-calibri">Outlet: </span>
                        <span className="mx-2 text-gray-600 font-calibri">{areaName}</span>
                    </h5>
                    <h5 className = "px-2 m-1 font-calibri font-bold">
                        {sla.minDeliveryTime}
                        -
                        {sla.maxDeliveryTime} mins
                    </h5>
                    <h5 className = "px-2 m-1 font-calibri font-bold">
                        <div>
                            <img className="w-7 h-7" 
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu">
                            </img>
                        </div>
                        <div className="px-2 text-gray-600 font-normal">
                            <span className="font-bold">{sla.lastMileTravelString } </span> 
                            <span>| {feeDetails.amount/100  + " Delivery fee will apply"}</span>
                        </div>
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