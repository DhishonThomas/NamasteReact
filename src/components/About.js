import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"



// const About = ()=>{



//     return(<div>


//         <h1>About</h1>
//         <h2>This is my about page</h2>
// <br/>
// <UserClass name={"Dhishon"}  contact={108}  location={"Kerala"}    />

//     </div>)
// }

// export default About


class About extends Component{

constructor(props){
    super(props)

console.log("parent constrctor called")
}


componentDidMount(){
    console.log("parent component is worked")
}

render(){
     
    console.log("parent render worked")

    return(<div>


        //         <h1>About</h1>
        //         <h2>This is my about page</h2>
        // <br/>
        // <UserClass name={"Dhishon"}  contact={108}  location={"Kerala"}    />
        
        //     </div>)

}

}


export default About