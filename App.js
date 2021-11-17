import { Component } from "react";
import React from "react";


class App extends Component{

  constructor(){
    super()
    this.state={Name:"",
                lastName:""}      

  }

  hello(){
    console.log(this.state)


  }

  render(){
    return(
      <div>
        <input onChange={(e)=>this.setState({Name:e.target.value})}></input>
        <input onChange={(e)=>this.setState({lastName:e.target.value})}></input>
        <button onClick={()=>this.hello()}> Submit</button>
      </div>
    )
  }
}
export default App;