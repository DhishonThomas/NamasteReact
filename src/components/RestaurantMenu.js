import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Menu_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const RestaurantMenu=()=>{

    const {resId}=useParams()
const [menuData,setMenuData]=useState(null)
    console.log(resId)

    const fetchData=async ()=>{

        const data=await fetch(Menu_URL+resId+"&catalog_qa=undefined&submitAction=ENTER")
    
        const json=await data.json()
    console.log("json",json)
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

const dispatch=useDispatch()


const handleAddCart=()=>{
dispatch(addItem(menuData))
}

return (<div className="m-10 p-4 w-auto flex">
<div className="w-[650px] ">
<img alt="img"
className="w-full object-cover"
src={CDN_URL+cloudinaryImageId}/>
</div>


<div className="mx-36">
<h1 className="p-2  pb-4 text-4xl">{name}</h1>
<h3 className="p-2">{cuisines.join('')}</h3>
<h3 className="p-2">{city}</h3>

<h3 className="p-2">{avgRating}</h3>
<button 
onClick={handleAddCart}
className="bg-slate-500 rounded-lg p-2">
Add to cart

</button>
</div>




</div>)
    
}

export default RestaurantMenu