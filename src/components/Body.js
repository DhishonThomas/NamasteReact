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
console.log(json)

 console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
let apiRes= json?.data.cards[0]?.imageGridCards?.info[0]
console.log(apiRes)
if(apiRes !== undefined){
  const infoArray = apiRes.map(item => item.info);
  console.log("infoArray",infoArray)
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
        <div className="flex mx-56 shadow-lg">

        <div className="p-4 m-4">

          <input type="text" className="border border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)
          }></input>

          {console.log(searchText)}

          <button 
          className="px-4 py-2 m-4 bg-green-500 rounded"
          onClick={()=>{
            const filteredData=restaurantData.filter((elem)=>elem.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterSearchData(filteredData)
          }

          }>
            Search
          </button>

        </div>

            <button className="bg-slate-400 m-12 px-4 rounded" 
            onClick={()=>{

                const filteredData = restaurantData.filter((elem)=>
                    elem.avgRating >= 4.5
                )
                setRestaruant(filteredData)
            }}
            >Top Rated Restaurants</button>

        </div>
        
        <div className="mx-56 md:mx-44 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
        {  filterSearchData.map((elem,index)=>(
          <Link to={"/restaurants/"+elem.id}>          <RestrauntCard resObj={elem} key={elem.id}/>
          </Link>
        ))}
          
  
        </div>
      </div>
    )
  }


  export default Body