const RecommendedRestoCard = (RestoCard)=>{
    return (props)=>{
        var data = props.restoData;
        return (<div>
            <span className="absolute bg-black text-white rounded-r-md shadow-2xl shadow-slate-500">Recommended</span>
            <RestoCard  restoData = {data} />
        </div>)
    }
}

export default RecommendedRestoCard;