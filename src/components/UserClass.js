import { Component } from "react";


class UserClass extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            count1:1,        

        }

        console.log("child constructor")

    }

    componentDidMount(){
        console.log("child component")
    }

render(){


console.log("child render worked")

const {name,location,contact}=this.props
const {count,count1}=this.state

return (

<div className="user-card">

<button onClick={()=>{
    this.setState({
        count:this.state.count+1
    })
}}>Increae count</button>

<h1>Count:{count}</h1>
<button onClick={()=>{
    this.setState({
        count:0
    })
}}>reset count</button>
<h1>Count1:{count1}</h1>

<h2>Name:{name}</h2>
<h3>Location:{location}</h3>
<h4>Contact:{contact}</h4> 
        </div>
    )

}
}

export default UserClass