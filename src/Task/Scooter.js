import { useState } from "react";

function Scooter(){
// const [company,setCompany]=useState("hero");
// const [model,setModel]=useState("optima hs 500");
// const [mileage,setMileage]=useState('120km');
// const [color,setColor]=useState('grey');

const [scooter,setScooter]=useState({
                                     company:'hero',
                                     model:'optima hs 500',
                                     mileage:'120km',
                                     color:'grey'
                                    });
function updateColor(){
setScooter((previousstate)=>{return{...previousstate,color:'red'}})
          }
                           
          console.log("current state",scooter)

    return (
        <>
        <h1>My Electric bike details</h1>
        <h2>company:{scooter.company}</h2>
        <h2>model:{scooter.model}</h2>
        <h2>Mileage:{scooter.mileage}</h2>
        <h2>color:{scooter.color}</h2>
        <button onClick={updateColor}>Update color</button>
        </>
    )
}
export default Scooter;