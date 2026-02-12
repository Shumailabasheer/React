import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
    const [count,setcount]=useState(0)
  return (
   <>
   <ChildA data={count} updateCount={setcount}/>
   <ChildB data={count} updateCount={setcount}/>
   </>
  )
}

export default Parent
