import { useState } from "react"

function getDate(){
    const date=new Date();
   const day= date.getDate();
 const month=  date.getMonth()+1;
 const year=date.getFullYear();
 return    `${day}/${month}/${year}`;

}

function getCurrentTime(){
    const date=new Date();
 const hour= date.getHours()<10? "0"+date.getHours():date.getHours();
  const minutes= date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes();
   const seconds= date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
   return `${hour}:${minutes}:${seconds}`
}




function Time(){
const [time,setTime]=useState(getCurrentTime());
const [date,setDate]=useState(getDate());
const [timecolor,setTimeColor]=useState(true);

setTimeout(()=>{

    setTime(getCurrentTime());
    setTimeColor(!timecolor);
},1000); 

    return (
        <>
        <h1>welcome to React app</h1>
        <p>The date is {date} and time is<span style={{backgroundColor:timecolor?"yellow":"red"}}> {time}</span></p>
        </>
    )
}
export default Time;