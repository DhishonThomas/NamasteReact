import Logo from "./Logo"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

const onlineStatus=useOnlineStatus()

const [buttonName,setButtonName]=useState("Login")

  return (
      <div className="header">

        <Logo />
        <div className="nav-items">
          <ul >
            
          <li>Online Status{onlineStatus?"🟢":"🔴"}</li>
          <li><Link to={"/newShop"} >NewShop</Link></li>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li>Cart</li>

            <button className="login" onClick={()=>buttonName==="Login"?setButtonName("Logout"):setButtonName("Login")}> {buttonName}</button>
  
          </ul>
        </div>
      </div>
    )
  }

  export default Header 