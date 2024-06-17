import { CloudinaryImageUrl } from "../Utils/Constants";


const MenuCard = (resultData)=> {
    const data = resultData?.menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    return (
        data?.map((t)=> 
        <div key={t.card.info.id} className="menu">
            <div >
                <h3 className="menuName" > {t.card.info.name} </h3>
                <h4 className="price">${t.card.info.price/100}</h4>
                <h4 className="ratings">★ {t.card.info.ratings.aggregatedRating.rating} ({t.card.info.ratings.aggregatedRating.ratingCountV2})</h4>
                <h5 className="menuDesc">{t.card.info.description}</h5>
            </div>
            <div>
                <img className="menuImg" src={CloudinaryImageUrl + t.card.info.imageId} />
            </div>
            
        </div>
    )
    );
}

export default MenuCard;