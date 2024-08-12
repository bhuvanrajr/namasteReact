
import RestoCard from "./RestoCard";
import RecommendedRestoCard from "./RecommendedRestoCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useInternetStatus from "../Utils/useInternetStatus";
import { UserContext } from "../Utils/UserContext";
const Body = () => {

    const [restaurantsList,setRestaurantsList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const isOffline = useInternetStatus();
    const {userName} = useContext(UserContext);
    const {setUserInfo} = useContext(UserContext);

    const RecommendedResto = RecommendedRestoCard(RestoCard);

    useEffect(()=>{
       fetchData();
    },[]);
    
    const FilterResturants = ()=>{
        const result = restaurantsList.filter((rest)=> {
            return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredRestList(result);
    }

    var fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908467394211806&lng=77.55116958171129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards);
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    console.log(filteredRestList?.map((f)=> f.info.avgRating));

    const ButtonClicked = ()=>{
        const newRestList = restaurantsList.filter(x=> x.info.avgRating > 4);
        setRestaurantsList(newRestList);
    }
    if(isOffline)
        return <div><h1>Your internet connectivity is Down!</h1></div>;
    
    return (restaurantsList.length === 0 || restaurantsList == undefined )? <Shimmer/> : (
        <div className="m-3">
            <div>
            <input type="text" className="m-2 border border-black rounded-md" value = {searchText} 
            onChange={(e)=>{setSearchText(e.target.value)}} />
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{FilterResturants();}}>Search</button>
            <button onClick={ButtonClicked} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Find best Restaurants
            </span>
            </button>
            <input type="text" className="m-2 border border-black rounded-md" onChange={(e)=>{setUserInfo(e.target.value)}} value={userName} />
            </div>
             <div className="flex flex-wrap">
                {
                    filteredRestList.map(restaurant=> 
                    <Link key = {restaurant.info.id} to={"/restInfo/"+restaurant.info.id}>
                        {
                            <UserContext.Provider value={userName}>
                            {
                                (restaurant.info.avgRating > 4.4) ? 
                                <RecommendedResto restoData = {restaurant} /> :
                                <RestoCard restoData = {restaurant} /> 
                            }
                            </UserContext.Provider>
                        } 
                    </Link>)
                }  
            </div>
            
        </div>
    );
}

export default  Body;