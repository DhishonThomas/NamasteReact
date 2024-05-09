import RestrauntCard from "./RestrauntCard"
import restrautList from "../utils/mockData"
import { useState } from "react"


const Body = () => {
    const [restaurantData,setRestaruant]=useState(restrautList)

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{

                const filteredData = restaurantData.filter((elem)=>
                    elem.data.avgRating >= 4
                )
                setRestaruant(filteredData)
            }}
            >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
       
        {  restaurantData.map((elem,index)=>(
          <RestrauntCard resObj={elem} key={index}/>
        ))}
          
  
        </div>
      </div>
    )
  }


  export default Body