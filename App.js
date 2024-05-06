import React from "react"
import ReactDOM from "react-dom/client"

const title=(
<h1>Header one using jsx element</h1>
)

const TitleFunction=()=>{
  return ( <h2>Header second using jsx function</h2>)
}

function TitleComponent(){
return (<div className="title">
   {title}
   {<TitleFunction/>}
   <h3>Header inside the TitleComponent</h3>
</div>)
}



const root = ReactDOM.createRoot(
 
   document.getElementById("root")
)

root.render(TitleComponent())

