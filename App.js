import React from "react"
import ReactDOM from "react-dom/client"

const title=(
<h1>Header one using jsx element</h1>
)



const values = ()=>{
   return(
      <input type="text" placeholder="Enter value"/>

   )
}

const Search=()=>{
   return(

      <>
      <div className="search ">

         <div className="logo ">Logo</div>

{values()}

<div className="user ">User</div>

      </div>
    
      </>
   )
}

const root = ReactDOM.createRoot(
 
   document.getElementById("root")
)

root.render(Search())