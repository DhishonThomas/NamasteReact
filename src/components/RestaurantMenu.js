import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Menu_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { CDN_URL } from "../utils/constants"

const RestaurantMenu=()=>{

    const {resId}=useParams()
const [menuData,setMenuData]=useState(null)
    console.log(resId)

    const fetchData=async ()=>{

        const data=await fetch(Menu_URL+resId+"&catalog_qa=undefined&submitAction=ENTER")
    
        const json=await data.json()
    
    const MenuData=json.data.cards[2].card.card.info
    console.log(MenuData)
        setMenuData(MenuData)
    }
    

useEffect(()=>{
fetchData()
},[])



if(menuData===null){return <Shimmer/>
}
const {name,city,cloudinaryImageId,avgRating,cuisines}=menuData
return (<div className="menu">

<h1>{name}</h1>
<img alt="img" src={CDN_URL+cloudinaryImageId}/>
<h3>{cuisines.join('')}</h3>
<h3>{city}</h3>

<h3>{avgRating}</h3>


</div>)
    
}

export default RestaurantMenu