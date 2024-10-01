import Logo from "./Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux"
const Header = () => {

const onlineStatus=useOnlineStatus()

const [buttonName,setButtonName]=useState("Login")

//Selecting to the store using a Selector

const cart=useSelector((store)=>store.cart.items)

  return (
      <div className="bg-pink-100 shadow-lg ">
<div className="mx-56 items-center flex justify-between">
        <Logo />
        <div className="nav-items">
          <ul className="flex p-4 m-4 " >
            
          <li className="px-4">Online Status{onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4"><Link to={"/newShop"} >NewShop</Link></li>
            <li className="px-4"> <Link to="/">Home</Link></li>
            <li className="px-4"> <Link to="/about">About</Link></li>
            <li className="px-4"> <Link to="/contact">Contact</Link> </li>
            <li className="px-4"> <Link to={"/cart"}>Cart-{cart.length}</Link> </li>

            <button className="login" onClick={()=>buttonName==="Login"?setButtonName("Logout"):setButtonName("Login")}> {buttonName}</button>
  
          </ul>
        </div>
        </div>
      </div>
    )
  }

  export default Header 