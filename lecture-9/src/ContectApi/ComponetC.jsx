import React, { useContext } from 'react'
import { UserContext } from './Boos'

const ComponetC = () => {
  const user = useContext(UserContext)
  // console.log(user)

  return (
   <>
   <h1>ComponetC.........{user.name}</h1>
   </>
  )
}

export default ComponetC
