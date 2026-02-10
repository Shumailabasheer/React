import React, { useContext } from 'react'
import ComponetC from './ComponetC'
import { ThemeContext } from './Boos'

const CompontB = () => {
  const {theme,setTheme} = useContext(ThemeContext) //==theme desctructure kr rhy hs q ka isy B ma use krna ha 
  // console.log(theme)
  return (
 <>
   <h1>CompontB..........</h1>
{/* button pr click krna sy console pr light sy dark ho jae ga is ma hum contextApi ka through kam kr rhy ha */}
   <button onClick={()=> setTheme('dark')}>Theme Change</button>
   <hr />
   <ComponetC/>
 </>
  )
}

export default CompontB
