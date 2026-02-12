import React from 'react'

const ChildA = ({data,updateCount}) => {
  return (
  <>
  <div>ChildA {data}</div>
  <button onClick={()=> updateCount((prev)=>prev +1)}>Update</button>
  
  </>
  )
}

export default ChildA
