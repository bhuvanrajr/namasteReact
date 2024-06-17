import { CloudinaryImageUrl } from "../Utils/Constants";
const RestoCard = (props) =>{
    const { info }= props.restoData;
    return (
        <div className="restoCard">
            <img className="restoImg" src={ CloudinaryImageUrl + info.cloudinaryImageId } />
            <h4>{info.name}</h4>
            <h5>{info.cuisines.join(", ")}</h5>
            <h5>{info.avgRatingString}</h5>
            <h5>{info.sla.slaString}</h5>
        </div>
    )
}

export default RestoCard;