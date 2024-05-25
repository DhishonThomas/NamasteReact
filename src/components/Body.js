import RestrauntCard from "./RestrauntCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { Restaurant_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [restaurantData,setRestaruant]=useState([])
const [filterSearchData,setfilterSearchData]=useState([])
    const [searchText,setSearchText]=useState("")



//use effect have two arguments callback function and an 
useEffect(()=>{
fetchData()

},[])
//when ever state variable updates , react triggers a reconsiliation cycle (rerenders the componentent)

const fetchData= async ()=>{
 const data=await fetch(Restaurant_URL)
 const json = await data.json()
let apiRes= json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
if(apiRes !== undefined){
  const infoArray = apiRes.map(item => item.info);
  setfilterSearchData(infoArray)
  setRestaruant(infoArray)
}


}

const onlineStatus=useOnlineStatus()

if(onlineStatus===false){
  return(<h1>Looks that your are offline 🙂 😙 </h1>)
}

if(restaurantData.length===0){
  return (Shimmer()

)
}

//react fiber is a new reconsilation dom to efficiantly manipulate the dom
    return (
      
      <div className="body">
        <div className="filter">

        <div className="search">
          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)
          }></input>
          {console.log(searchText)}
          <button onClick={()=>{
            const filteredData=restaurantData.filter((elem)=>elem.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterSearchData(filteredData)
          }

          }>
            Search
          </button>
        </div>
            <button className="filter-btn" 
            onClick={()=>{

                const filteredData = restaurantData.filter((elem)=>
                    elem.avgRating >= 4.5
                )
                setRestaruant(filteredData)
            }}
            >Top Rated Restaurants</button>
        </div>
        
        <div className="res-container">
       
        {  filterSearchData.map((elem,index)=>(
          <Link to={"/restaurants/"+elem.id}>          <RestrauntCard resObj={elem} key={elem.id}/>
          </Link>
        ))}
          
  
        </div>
      </div>
    )
  }


  export default Body