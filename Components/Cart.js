import { useSelector } from "react-redux";

const Cart = ()=>{
    const items = useSelector((store)=> store.cart.items);
    console.log(items);
    return (
        items.map((info)=>{
            <div key={info.name} className="mx-20 my-10 w-2/3 rounded-b-lg flex">
                        <div className="w-2/3">
                            <div className=" text-xs">
                                {info.itemAttribute?.vegClassifier == "NONVEG" ? "🔴" : "🟢"}
                            </div>
                            <div className="text-base font-bold">
                                {info.name}
                            </div>
                            <div className="text-sm font-semibold">
                            &#8377;{info.price/100}
                            </div>
                            <div className="my-4 text-sm">
                            <span  className="text-green-800 font-bold">⭐{info.ratings.aggregatedRating.rating}</span>({info.ratings.aggregatedRating.ratingCountV2})
                            </div>
                            <div className="text-sm font-arial font-medium text-gray-500">
                            {info.description}
                            </div>
                        </div>
                        <div className="w-1/3 content-end hover:ring-sky-500">
                            <img className="w-36 h-36 rounded-lg " src={ CloudinaryImageUrl + info.imageId } />
                            <button onClick={() => dispatch(addItem(info))}>Add</button>
                        </div>
                    </div>
        })
    )
}
export default Cart;