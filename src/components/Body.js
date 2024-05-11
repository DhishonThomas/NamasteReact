import RestrauntCard from "./RestrauntCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
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
 const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 const json = await data.json()
let apiRes= json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
 const infoArray = apiRes.map(item => item.info);
 const filterSearchData = apiRes.map(item => item.info);
 setfilterSearchData(filterSearchData)
 setRestaruant(infoArray)

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
          <RestrauntCard resObj={elem} key={index}/>
        ))}
          
  
        </div>
      </div>
    )
  }


  export default Body