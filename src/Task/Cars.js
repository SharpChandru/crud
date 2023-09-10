
import React from "react";
class Cars extends React.Component{
    constructor(){
        super();
        this.state={color:'red',model:'optima'};
    }
    render(){
        return (
            <>
            <h1>My car color is {this.state.color} and model is {this.state.model}</h1>
            <button onClick={()=>{this.setState((previousstate)=>{return {...previousstate,color:'blue'}})}}>change color</button>
            </>
        )

    }
}
export default Cars;