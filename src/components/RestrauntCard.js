import { CDN_URL } from "../utils/constants"

const RestrauntCard = (props) => {

    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId}=props.resObj?.data
    console.log(name)
    return (
      <div className="res-card">
        <img alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestrauntCard