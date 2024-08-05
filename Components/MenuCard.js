import { useState } from "react";
import MenuCardDetails from "./MenuCardDetails";


const MenuCard = (resultData)=> {
    const [showIndex, setShowIndex] = useState(-1);
    const data = resultData?.menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    if(data!= null)
    {
        //console.log(data?.map((d)=> d.card?.card?.title));
        return(
            <div className="my-20">
                {
                    data.map((d, index)=>{
                        return <MenuCardDetails key = {d?.card?.card?.title} menu = {d} setShowItems = {(index, showIndex)=> {(showIndex == index)? setShowIndex(-1) : setShowIndex(index)}} showItems = {index==showIndex? true : false} showIndex = {showIndex} index = {index}/>
                    })
                }
        </div>)
    }
    else
    return <></>
}

export default MenuCard;