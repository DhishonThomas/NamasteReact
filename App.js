import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
   "h1",
   {key:124,
      id: "title"
   },
   "Heading 1"
);

const heading2 = React.createElement(
   "h1",
   {
    key:123,
      id: "title2"
   }, 
   "Heading 2"
);

const container = React.createElement(
    "div",
    {key:234,
        id:"container"
    },
    [heading1,heading2]
)



const root = ReactDOM.createRoot(
 
   document.getElementById("root")
)

root.render(container)

