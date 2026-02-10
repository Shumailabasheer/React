import { createContext, useState } from 'react'
import ComponetA from './ComponetA'


//====creat====
 export const UserContext = createContext()
export const ThemeContext = createContext()

const Boos = () => {
const [theme,setTheme] = useState('light')
const [user,setUser] =useState({
    name:"shumail",
    email:"shumi@gmail.com"
})

  return (
   <>
{/* =====provider=== */}
<ThemeContext.Provider value={{theme,setTheme}}> 
  {/* //===multipal value bhi pass kr sakta ha */}
<UserContext.Provider value={{user,setUser}}> 

<h1>Main file</h1>

<ComponetA/>

</UserContext.Provider>
</ThemeContext.Provider>

   </>
  )
}

export default Boos
