import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const[count,setCount]=useState(0);
    ///=======count2====///////
    const[count2,setCount2]=useState(0)

    const Updatecount=()=>{
        setCount(count +1)
    }
    // ======count2===/////
     const Updatecount2=()=>{
        setCount2(count2 +1)
    }
    useEffect(()=>{
     console.log("hello coder")
    },[count,count2]);
  return (
   <>
   <h1>{count}</h1>
   <button onClick={Updatecount}>Updatecount</button>
   
   <hr />
{/* count2 */}
   <h1>{count2}</h1>
   <button onClick={Updatecount2}>Updatecount2</button>
   
   </>
  )
}

export default UseEffect
