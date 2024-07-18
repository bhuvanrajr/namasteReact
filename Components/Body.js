
import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useInternetStatus from "../Utils/useInternetStatus";

const Body = () => {

    const [restaurantsList,setRestaurantsList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const isOffline = useInternetStatus();


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
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const ButtonClicked = ()=>{
        const newRestList = restaurantsList.filter(x=> x.info.avgRating > 4);
        setRestaurantsList(newRestList);
    }
    if(isOffline)
        return <div><h1>Your internet connectivity is Down!</h1></div>;

    return (restaurantsList.length === 0)? <Shimmer/> : (
        <div className="body">
            <div className="searchBox">
            <input type="text" className="searchArea" value = {searchText} 
            onChange={(e)=>{setSearchText(e.target.value)}} />
            <button className="searchBtn" onClick={()=>{FilterResturants();}}>Search</button>
            <button className = "bestRest" onClick={ButtonClicked}>Find best Restaurants</button>
            </div>
            <div className="resto-Container">
                {
                    filteredRestList.map(restaurant=> 
                    <Link key = {restaurant.info.id} to={"/restInfo/"+restaurant.info.id}>
                        <RestoCard restoData = {restaurant} /> 
                    </Link>)
                }  
            </div>
            
        </div>
    );
}

export default  Body;