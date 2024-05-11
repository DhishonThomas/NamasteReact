import Logo from "./Logo"
import { useState } from "react"

const Header = () => {

const [buttonName,setButtonName]=useState("Login")

  return (
      <div className="header">
  
        <Logo />
        <div className="nav-items">
          <ul >
  
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" onClick={()=>buttonName==="Login"?setButtonName("Logout"):setButtonName("Login")}> {buttonName}</button>
  
          </ul>
        </div>
      </div>
    )
  }

  export default Header 