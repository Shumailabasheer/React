import React, { createContext, useState } from 'react'
import { styles } from '../Settings/ThemeStyle';

export const  ThemeContext= createContext();

const Themeprov = ({children}) => {
const [theme,setTheme] = useState('light');
const CurrentStyle = styles[theme];             // yaha sy hum sb jaga theme provide kr rhy ha is liye jo color styling banai ha usy yaha bulae ga
// console.log(CurrentStyle)

  return (
 <>
 <ThemeContext.Provider value={{theme,setTheme,CurrentStyle}}>
{children}
 </ThemeContext.Provider>

 </>
  )
}

export default Themeprov
