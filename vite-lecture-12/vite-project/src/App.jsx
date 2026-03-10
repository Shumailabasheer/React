
// import { useMemo, useState } from 'react'
import './App.css'

// ===useMemo()
// function App() {
//  const[count,setCount]=useState(0);
//   const[sub,setSub]=useState(1000);

// // ==func banaya ha count ki jo bhi value ko gi us sy multiply kr deta (memoze creat kiya ha ka kaha use ho gi) ye wo function ha jo un-neccecary call ho rahahah a==//
//   const multiplay =useMemo(
//   ()=>{
//      console.log("hellloooo")    ///===is sy pata chal rahah ha wo func bhi chal rhaha ha jiski zarorat ni ha mujhltiply ka sum sy koi conect ni tha phir bhi chal rahaha ha ek ko update kr rhi ho to dusra un-neccecary call ho rhaha ha
// return count * 10
//   },[count]  //==dependancy di ha jab chal jab count ko update kare
//   )
//   return (
//     <>

//     <h1>Multiply :{multiplay}</h1>
//     <h1>Counta:{count}</h1>
//     <button onClick={()=>setCount(count + 1)}>Update</button>
//     <h1>Sub:{sub}</h1>
//     <button onClick={()=>setSub(sub -1)} >Decrease</button>
//     </>
//   )
// }

// export default App


import React, { useCallback, useState } from 'react'
import UseCallbc from './UseCallbc'

const App = () => {
    const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // ===func banaya jo kuch na kuch kam kr 
  const doSomething = useCallback(
  ()=>{
  
  },[count]
)


  return (
    <>
    
    <div>
          {/* isy abhi kahi use ni kiya bus call krwyaa ha count chalane pr bhi chal rhaha ha esa ni hona chahiye unnecessary call ho rhahah */}
          {/* jo func uper banya usy as a prop pass kare ga ye unnecessary chale ga hum na isy use jo kiya hi ni ha or na ho call kiya ha usecallbc ma ja kr*/}
          {/* count ko as a prop pass kiya q ka ma chahti ho jab jab count chale ye bhi run ho */}
<UseCallbc doSomething={doSomething} count= {count}/> 


<h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>

      <h1>Count2 :{count2}</h1>
      <button onClick={() => setCount2(count2 + 10)}>Update count2</button>
    </div>
    </>
    
  )
}

export default App
