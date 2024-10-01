import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const RestrauntCard = (props) => {

    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId}=props.resObj
    console.log(name)
    return (
      
      <div className="bg-slate-300 p-4 m-10 w-72  rounded shadow-lg lg:h-[450px] ">
        
        <img
        className="w-full object-cover h-48 rounded-t"
        alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
        <div className="p-4">
        <h3>{name}</h3>
        <h4 className="text-gray-700 mb-1">{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
      
    )
  }

  export default RestrauntCard
  