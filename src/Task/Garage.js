import Apple from "./Apple";
import Car from "./car";

function Garage(){
const AppleInfo={type:'fuji',color:'red'}
    const carInfo={brand:'ford',color:'black'}

    const carlist=[
        {brand:"ford",color:'black'},
        {brand:"bmw",color:'green'},
        {brand:"testla",color:'red'},
    ]
    const numbers=[2,4,6,8,10];
    return (
        <>
        <h1>who lives in my garage</h1>
<Car carInfo={carInfo}/>
        <Apple AppleInfo={AppleInfo}/>

   {/* <ul>
    {carlist.map((car)=> <li>{car.brand}</li><li>{car.color}</li>)}
   </ul> */}
      <ul>
    {/* {carlist.map((car)=> <li><Car carInfo={car} /></li>)} */}

    {carlist.map((car)=><li key={car.brand}><Car carInfo={car}/></li>)}   </ul>
       <h2>numbers</h2>
       {numbers.map((no,index)=><li key={index}>{no}</li>)}
        </>
    )
}
export default Garage;