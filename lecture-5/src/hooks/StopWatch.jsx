import React from 'react'
import { useState,useEffect} from 'react';

const StopWatch = () => {
    const [time,setTime]= useState(3675);       //==useState ka use kare ga
    const[isRunning,setisRunning]= useState(false)


  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000);
    }


    return () => clearInterval(intervalId);

  },
   [isRunning]           ///==is func ki depen isRunning ka uper ha jb jb update karo tab action perfrom kr
  )
  // ⏱ Time calculation
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
   <>
   <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>StopWatch</h1><h1>
        {String(hours).padStart(2, "0")} :
        {String(minutes).padStart(2, "0")} :
        {String(seconds).padStart(2, "0")}
      </h1>
   
   {
    !isRunning ?(
<button onClick={()=>setisRunning(true)}>{time ===0 ? "Start" :"Resume"} </button>     //=humare value 0 hogi to satat chale ga wrna Reaume
    ):(
   <button onClick={()=>setisRunning(false)}>pause</button>    //==true hone pr pause dikha ha stop chalte waqt
    )
   }

 
   <button onClick={()=>{ setisRunning(false);
          setTime(0)}}>Reset</button>
          </div>
   </>
  )
}
   
 

export default StopWatch
