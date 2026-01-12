// const State = () => {

//   let count=0;
// function counter(){
//  count++
// }
// console.log(count)
  // return (           ===== ye count update ni ho rha console pr show ho raha ha ui ma update 
  //                    ==ni ho react ma kisi bhi value ko varibale ko dirctly update ni kr sakta ha componet ki dynamic value ko state ma store krwae ga
//   <>
// <h1>{count}</h1>
  
//     <button onClick={counter}>update</button>
//   </>
//   )
// }

// export default State
// ================================state(useSate)=======================================================//

import React from 'react'
import { useState } from 'react'

const State = () => {
  // const [varName , functionToUpdate] = useState(initialValue)
  const [count, setCount] = useState(0);

  function counter(){
    setCount(count +1);
  }
    console.log(">>>>>>>> " + count);

  return (
    <>
    
    <h1>{count}</h1>
      <button onClick={counter} >Update</button>

{/* ================== */}
{/* 
let [show, setShow] = useState(false);

<button onClick={() => setShow(!show)}>
  Toggle
</button>

{show && <p>Hello</p>} */}


    </>
  )
}

export default State
