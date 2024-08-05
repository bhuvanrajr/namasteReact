import { useState } from "react";
import MenuItem from "./MenuItem";
const MenuCardDetails = ({menu, showItems, setShowItems, showIndex, index})=>{
    var menuDetail = menu?.card?.card;
    return(
        <div className="my-5">
                        <div className="mx-20 border border-l-gray-400  w-2/3 h-10 shadow-lg flex 
                        justify-between align-middle rounded-b-lg font-bold hover: cursor-pointer"
                        onClick={()=> setShowItems(index, showIndex)}>
                            <span className="mx-2 content-center font-bold">
                                {menuDetail.title} ({menuDetail.itemCards.length})
                            </span>
                            <span className="mx-2 content-center">
                                🔽
                            </span>
                        </div>
                        {
                            (showItems) ? 
                            (
                                <MenuItem key = {menuDetail?.title} item = {menu?.card?.card} />
                            ) : null
                        }
                </div>
    )
}

export default  MenuCardDetails;